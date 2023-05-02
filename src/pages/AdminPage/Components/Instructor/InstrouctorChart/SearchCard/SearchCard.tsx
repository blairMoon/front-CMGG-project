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
  Img,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import AdminRadarCart from "../SearchCard/Chart/AdminRaderChart";
import { RiNumber1 } from "react-icons/ri";
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
      <InputGroup w="380px" h="50px">
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
              <Image
                width="130px"
                height="145px"
                src="https://ifh.cc/g/hTWR7n.jpg"
                borderRadius="5px"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Table variant="simple" border="none" marginTop="10px">
                <Tbody fontSize="14px" color="white">
                  <Tr>
                    <Th px={0} py={2} color="white" border="none">
                      이름
                    </Th>
                    <Td px={0} py={2} color="white" border="none">
                      이승아
                    </Td>
                  </Tr>
                  <Tr>
                    <Th px={0} py={2} color="white" border="none">
                      생년월일
                    </Th>
                    <Td px={0} py={2} color="white" border="none">
                      1990.1.1
                    </Td>
                  </Tr>

                  <Tr>
                    <Th px={0} py={2} color="white" border="none">
                      강의분야
                    </Th>
                    <Td px={0} py={2} border="none">
                      프론트엔드
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>

          <Box w="75%" h="100%">
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
