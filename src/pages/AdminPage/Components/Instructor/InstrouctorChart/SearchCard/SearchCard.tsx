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
        boxShadow="md"
        mt={"30px"}
        height="380px"
        width="600px"
      >
        <Flex h="300px">
          <Box mr={10} w="300px">
            <Text>이승아</Text>
            <Image
              borderRadius="20px"
              boxSize="220px"
              src="https://ifh.cc/g/hTWR7n.jpg"
            />
          </Box>
          <Box w="420px">
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
