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
        <Flex h="300px">
          <Box w="600px">
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
              mb="20px"
              marginTop="5px"
              // borderRadius="13px"
              boxSize="180px"
              src="https://ifh.cc/g/hTWR7n.jpg"
            />

            <Box display="flex" flexDirection="column" borderRadius="20px">
              <Table variant="simple" w="180px" borderRadius="20px">
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

          <Box w="450px">
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
    </div>
  );
};

export default SearchCard;
