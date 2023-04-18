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
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  useColorMode,
} from "@chakra-ui/react";
import { getLectureAndCategoryAndSearch } from "../../services/api";

import { ILectureData } from "../../../typings/LectureData";
import { FaLevelUpAlt } from "react-icons/fa";
import { css } from "@emotion/react";
import path from "path";

interface Props {}
interface CategoriesNames {
  [key: string]: string;
}

const WholeLectures: React.FC<Props> = () => {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const { bigCategory, smallCategory } = useParams<{
    bigCategory: string;
    smallCategory: string;
  }>();
  const { colorMode, toggleColorMode } = useColorMode();
  const pageSize: number = 30;

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchName: any = params.get("search") || "";
  const pageNum: number = Number(params.get("page"));
  const [tags, setTags] = useState<string[]>(["입문", "초급", "중급", "고급"]);
  const { isLoading, data, refetch } = useQuery(
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
  useEffect(() => {
    setTags(["입문", "초급", "중급", "고급"]);
  }, [location.pathname]);
  const handleTagReturn = () => {
    setTags(["입문", "초급", "중급", "고급"]);
  };
  const handleTagClose = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
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
        marginBottom="25px"
      >
        <Box w="20%" fontSize="18px" fontWeight="600">
          {smallCategory === "all"
            ? `${categoriesNames[bigCategory ?? ""]} `
            : `${categoriesNames[smallCategory ?? ""]} `}
        </Box>

        <Select
          placeholder="강의 필터"
          size="md"
          width="200px"
          marginTop="30px"
        >
          <option value="option1">최신순</option>
          <option value="option2">인기순</option>
          <option value="option3">평점순</option>
          <option value="option3">가격순</option>
        </Select>
      </HStack>
      <HStack spacing={4} paddingBottom="20px">
        {tags.map((level, index) => (
          <Tag
            size="md"
            key={index}
            borderRadius="full"
            variant="solid"
            bg="#003c93"
          >
            <TagLabel>{level}</TagLabel>
            <TagCloseButton onClick={() => handleTagClose(index)} />
          </Tag>
        ))}
        <div style={{ cursor: "pointer" }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            css="[object Object]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleTagReturn()}
          >
            <path
              fill="none"
              stroke={colorMode === "light" ? "#000" : "#fff"}
              stroke-width="2"
              d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
            />
          </svg>
        </div>
      </HStack>

      <GridItem area="main" mx="auto">
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
              ? data?.data?.map((lecture: ILectureData) => (
                  <GridItem key={lecture.LectureId} mx="auto">
                    <LectureCard data={lecture} />
                  </GridItem>
                ))
              : data?.data?.map((lecture: ILectureData) => (
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
