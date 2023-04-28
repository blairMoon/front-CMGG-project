import React from "react";
import {
  Box,
  Circle,
  Flex,
  Image,
  Input,
  InputGroup,
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import AdminRadarCart from "../SearchCard/Chart/AdminRaderChart";
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
  return (
    <div>
      <InputGroup w="400px" h="50px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          bg="transparent"
          type="search"
          fontSize="16px"
          placeholder=" 이곳에 이름을 입력해주세요"
          w="100%"
          border="1px solid transparent"
        />
      </InputGroup>
      <Card
        borderRadius="20px"
        display="flex"
        // alignItems="center"
        p={4}
        boxShadow="lg"
        bg="#ddebf7"
        mt="60px"
        height="380px"
        width="640px"
      >
        <Flex>
          <Box>
            <Flex>
              <Text
                // fontFamily="monospace"
                fontSize="23px"
                fontWeight="600"
                color="#02327b"
                // bg="#5f8abf"
                // borderRadius="10px"
                // borderBottom="1px solid black"
                // border="1px solid black"
                // textAlign="center"
                // display="flex"
                // justifyContent="center"
                alignItems="center"
              >
                이승아
              </Text>
            </Flex>
            <Image
              // borderRadius="13px"
              boxSize="180px"
              src="https://ifh.cc/g/hTWR7n.jpg"
            />

            <Box display="flex" flexDirection="column" borderRadius="20px">
              <Table variant="simple" borderRadius="20px">
                <Tbody fontSize="12px" borderRadius="20px">
                  <Tr p={5}>
                    <Th p={2}>생년월일</Th>
                    <Td p={2}>1990.1.1</Td>
                  </Tr>
                  <Tr>
                    <Th p={2}>성별</Th>
                    <Td p={2}>여</Td>
                  </Tr>
                  <Tr>
                    <Th p={2}>강의분야</Th>
                    <Td p={2}>프론트엔드</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>

          <Box>
            <Text
              // fontWeight="600"
              // pt="15px"

              // pb="10px"
              color="#02327b"
              // border="1px solid black"
              display="flex"
              fontWeight="400"
              fontSize="13px"
              justifyContent="flex-end"
              // paddingRight="120px"
            >
              강사능력차트
            </Text>
            <AdminRadarCart
              data={radarData}
              keys={radarKeys}
              indexBy={radarIndexBy}
            />
          </Box>
        </Flex>
      </Card>
      <Card
        borderRadius="20px"
        display="flex"
        px="8"
        py="6"
        boxShadow="lg"
        bg="#ddebf7"
        mt="60px"
        height="380px"
        width="640px"
      >
        <HStack
          justifyContent="space-between"
          pb="4"
          fontWeight="600"
          color="#02327b"
          fontSize="14px"
          alignItems="flex-start"
        >
          <Box fontSize="18px">이승아</Box>
          <Box>강사능력차트</Box>
        </HStack>
        <HStack
          // h="280px"
          spacing={0}
        >
          <Box w="45%" h="100%">
            <Box pb="4">
              <Image boxSize="160px" src="https://ifh.cc/g/hTWR7n.jpg" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Table variant="simple" borderRadius="20px">
                <Tbody fontSize="12px" borderRadius="20px">
                  <Tr>
                    <Th px={0} py={2}>
                      생년월일
                    </Th>
                    <Td px={0} py={2}>
                      1990.1.1
                    </Td>
                  </Tr>
                  <Tr>
                    <Th px={0} py={2}>
                      성별
                    </Th>
                    <Td px={0} py={2}>
                      여
                    </Td>
                  </Tr>
                  <Tr>
                    <Th px={0} py={2}>
                      강의분야
                    </Th>
                    <Td px={0} py={2}>
                      프론트엔드
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>

          <Box w="55%" h="100%">
            <AdminRadarCart
              data={radarData}
              keys={radarKeys}
              indexBy={radarIndexBy}
            />
          </Box>
        </HStack>
      </Card>
    </div>
  );
};

export default SearchCard;
