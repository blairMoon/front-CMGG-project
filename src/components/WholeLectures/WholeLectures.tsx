import React from "react";
import { useState, useEffect } from "react";
import LectureCard from "../WholeLectures/LectureCard/LectureCard";
import Props from "../WholeLectures/LectureCard/LectureCard";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Button,
  InputRightAddon,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { getLectureAndCategoryAndSearch } from "../../services/api";

import { LectureData } from "../../../typings/LectureData";

interface Props {}
interface CategoriesNames {
  [key: string]: string;
}

const WholeLectures: React.FC<Props> = () => {
  const [searchResult, setSearchResult] = useState("");

  const [pages, setPages] = useState<number[]>([]);
  const { bigCategory, smallCategory } = useParams<{
    bigCategory: string;
    smallCategory: string;
  }>();
  const pageSize: number = 30;

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchName: any = params.get("search") || "";
  const pageNum: number = Number(params.get("page"));
  const queryClinet = useQueryClient();
  const {
    isLoading,
    data,
    refetch: refetchSearch,
  } = useQuery(
    ["lectureSearch", bigCategory, smallCategory, pageNum, searchName],
    getLectureAndCategoryAndSearch,
    {
      onSuccess: (data) => console.log(data),
    }
  );
  const totalPages: number = Math.ceil(data?.totalNum / pageSize) || 0;
  const categoriesNames: CategoriesNames = {
    basic: "기초강의",
    all: "전체강의",
    frontend: "프론트엔드",
    backend: "백엔드",
    mobile: "모바일",
    react: "프론트엔드/react",
    vue: "프론트엔드/vue.js",
    html: "기초코딩/html",
    spring: "백엔드/spring",
    django: "백엔드/django",
    swift: "모바일/swift",
    css: "기초코딩/css",
    android: "모바일/android",
  };
  const handleSearch = (newPage: number) => {
    queryClinet.resetQueries([
      "lectureSearch",
      bigCategory,
      smallCategory,
      pageNum,
      searchName,
    ]);
    if (searchResult === "" || searchResult === undefined) {
      alert("검색어를 입력해주세요");
      // navigate(`/lectures/${bigCategory}/${smallCategory}?page=${newPage}`);
    } else {
      navigate(
        `/lectures/${bigCategory}/${smallCategory}?page=${newPage}&search=${searchResult}`
      );
    }
  };
  useEffect(() => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (pageNum <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (pageNum + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = pageNum - 2;
        endPage = pageNum + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    setPages(pageNumbers);
  }, [pageNum, totalPages]);

  const handlePageChange = async (newPage: number) => {
    navigate(`/lectures/${bigCategory}/${smallCategory}?page=${newPage}`);
  };

  return (
    <div>
      <HStack
        justify="space-between"
        mx="auto"
        alignItems="flex-start"
        paddingLeft="10"
      >
        <Box w="20%" fontSize="18px" fontWeight="600">
          {smallCategory === "all"
            ? `${categoriesNames[bigCategory ?? ""]} `
            : `${categoriesNames[smallCategory ?? ""]} `}
        </Box>
        <InputGroup w="45%">
          <Input
            marginBottom="30px"
            className="Input"
            variant="outline"
            value={searchResult}
            focusBorderColor="#003C93"
            placeholder={
              smallCategory === "all"
                ? `${categoriesNames[bigCategory ?? ""]} 검색`
                : `${categoriesNames[smallCategory ?? ""]} 검색`
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch(1);
              }
            }}
            onChange={(event) => {
              setSearchResult(event.target.value);
            }}
          />
          <InputRightAddon px="0">
            <Button
              fontSize="15px"
              w="100%"
              onClick={() => {
                handleSearch(1);
              }}
            >
              검색
            </Button>
          </InputRightAddon>
        </InputGroup>
      </HStack>

      <GridItem area={"main"} mx="auto" paddingLeft="10">
        {data?.data?.length === 0 || data === undefined ? (
          <Box>
            <Text>
              <Text as="span" color="red">
                {searchName}
              </Text>
              에 대한 검색결과가 없습니다.
            </Text>
          </Box>
        ) : (
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap="5">
            {searchName && !isLoading
              ? data?.data?.map((lecture: LectureData) => (
                  <GridItem key={lecture.LectureId} mx="auto">
                    <LectureCard data={lecture} />
                  </GridItem>
                ))
              : data?.data?.map((lecture: LectureData) => (
                  <GridItem key={lecture.LectureId} mx="auto">
                    <LectureCard data={lecture} />
                  </GridItem>
                ))}
          </Grid>
        )}

        <VStack mt="10" w="100%">
          <InputGroup justifyContent="center">
            <Button
              leftIcon={<ChevronLeftIcon />}
              onClick={() => handlePageChange(pageNum > 1 ? pageNum - 1 : 1)}
              disabled={pageNum <= 1}
              mr="2"
              variant="ghost"
            >
              이전
            </Button>
            <HStack spacing="2">
              {pages.map((page: number) => (
                <Button
                  key={page}
                  colorScheme={
                    page.toString() === pageNum.toString() ? "blue" : "gray"
                  }
                  variant={
                    page.toString() === pageNum.toString() ? "outline" : "ghost"
                  }
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
            </HStack>
            <Button
              rightIcon={<ChevronRightIcon />}
              onClick={() =>
                handlePageChange(
                  pageNum < totalPages ? pageNum + 1 : totalPages
                )
              }
              display={pageNum === totalPages ? "none" : "inline-flex"}
              disabled={pageNum >= totalPages}
              ml="2"
              variant="ghost"
            >
              다음
            </Button>
          </InputGroup>
        </VStack>
      </GridItem>
    </div>
  );
};
export default WholeLectures;
