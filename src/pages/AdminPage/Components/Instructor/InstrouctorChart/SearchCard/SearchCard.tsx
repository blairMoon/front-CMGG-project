import React, { useState } from "react";
import {
  Box,
  Circle,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useColorModeValue,
  HStack,
  VStack,
  Text,
  Card,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Img,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import AdminRadarCart from "../SearchCard/Chart/AdminRaderChart";
import { RiNumber1 } from "react-icons/ri";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SearchInstrutor } from "../../../../../../services/api";
import { namespaces } from "d3";
import { BiBox } from "react-icons/bi";
import { setContext } from "@sentry/react";

interface Props {}
const radarData = [
  { category: "수입률", 나: 30, 평균: 10 },
  { category: "완강률", 나: 20, 평균: 30 },
  { category: "점유율", 나: 30, 평균: 10 },
  { category: "재수강률", 나: 20, 평균: 30 },
  { category: "신규수강률", 나: 30, 평균: 10 },
];

const radarKeys = ["나", "평균"];
const radarIndexBy = "category";

const SearchCard: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState("");
  const location = useLocation();
  // const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const handleSearch = (name: string) => {
    const queryParams = new URLSearchParams();
    queryParams.append("search", name);
    navigate(`/admin/instructor/2/?${queryParams.toString()}`);
  };
  const { isLoading, data } = useQuery(
    ["lectureSearch", name],
    () => SearchInstrutor(name),
    {
      onSuccess: (data) => console.log(data),
    }
  );
  return (
    <div>
      <InputGroup w="550px">
        <InputRightElement
          mt="5px"
          // marginTop="5px"
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
          onClick={() => handleSearch(name)}
        />
        <Input
          bg="transparent"
          type="search"
          fontSize="17px"
          placeholder=" 이곳에 이름을 입력해주세요"
          w="100%"
          h="50px"
          border="1px solid #cbd5e1"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSearch(name);
              // setContext("");
            }
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>

      <Card
        // borderRadius="20px"
        display="flex"
        px="8"
        py="6"
        boxShadow="lg"
        style={{ opacity: 0.9 }}
        bg="#04204f"
        mt="60px"
        height="380px"
        width="550px"
      >
        {name && data === undefined ? (
          <Box
            height="100%"
            fontSize="20px"
            color="white"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="700"
          >
            {name} 강사가 존재하지 않습니다
          </Box>
        ) : (
          <Box>
            <HStack
              // justifyContent="space-between"
              pb="8"
              fontWeight="600"
              color="#02327b"
              fontSize="14px"
              alignItems="center"
              justifyContent="center"
            >
              <Img
                src="https://ifh.cc/g/YRYGQP.png"
                w="230px"
                h="20px"
                display="flex"
                justifyContent="center"
              />
              {/* <Box>강사능력차트</Box> */}
            </HStack>
            <HStack
              // h="280px"
              spacing={0}
            >
              <Box w="35%" h="100%">
                <Box pb="4">
                  {data ? (
                    <Image
                      width="130px"
                      height="145px"
                      src="https://ifh.cc/g/hTWR7n.jpg"
                      borderRadius="5px"
                    />
                  ) : (
                    <Box
                      width="130px"
                      height="145px"
                      borderRadius="5px"
                      bg="white"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Img width="50%" src="https://ifh.cc/g/BHNhKZ.png"></Img>
                    </Box>
                  )}
                </Box>
                <Box display="flex" flexDirection="column">
                  <Table variant="simple" border="none" marginTop="10px">
                    <Tbody fontSize="14px" color="white">
                      <Tr>
                        <Th px={0} py={2} color="white" border="none">
                          이름
                        </Th>
                        <Td px={0} py={2} color="white" border="none">
                          {data ? data.username : "???"}
                        </Td>
                      </Tr>
                      <Tr>
                        <Th px={0} py={2} color="white" border="none">
                          생년월일
                        </Th>
                        <Td px={0} py={2} color="white" border="none">
                          {data ? data.dateBirth : "????-??-??"}
                        </Td>
                      </Tr>

                      <Tr>
                        <Th px={0} py={2} color="white" border="none">
                          강의분야
                        </Th>
                        <Td px={0} py={2} border="none">
                          {data ? data.username : "????"}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              </Box>

              <Box w="75%" h="100%">
                {data ? (
                  <AdminRadarCart
                    data={radarData}
                    keys={radarKeys}
                    indexBy={radarIndexBy}
                  />
                ) : (
                  <Box
                    bgColor="white"
                    // color={colorMode === "light" ? "white" : "blackAlpha.700"}
                    borderRadius="md"
                    p="3"
                    boxShadow="md"
                    height="270px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Img src="https://ifh.cc/g/BHNhKZ.png" width="30%"></Img>
                  </Box>
                )}
              </Box>
            </HStack>
          </Box>
        )}
      </Card>
    </div>
  );
};

export default SearchCard;
