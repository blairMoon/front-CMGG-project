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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import HighPeople from "./HighPeople/HighPeople";
import SearchCard from "./SearchCard/SearchCard";

interface Props {}

const InstructorChart: React.FC<Props> = (props: Props) => {
  return (
    <Box w="100%" height="100%" p={0}>
      <Flex w="100%" justifyContent="space-between" h="550px" ml="30px">
        <Box
          // border="1px solid black"
          // border="1px solid black"
          mt="50px"
          // bg="gray.100"
          borderRadius="10px"
          position="relative"
          w="40%"
          h="490px"
          display="flex"
          // alignItems="center"
          justifyContent="center"
        >
          <HighPeople />
        </Box>
        <Box w="60%" display="flex" justifyContent="center" pt="4%">
          <SearchCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default InstructorChart;
