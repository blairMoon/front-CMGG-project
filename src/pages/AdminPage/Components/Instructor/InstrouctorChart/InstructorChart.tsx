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
    <Box>
      <Flex w="100%" justifyContent="space-between" h="670px" ml="30px">
        <Box
          // bg="#ddebf8"
          borderRadius="20px"
          position="relative"
          w="30%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <HighPeople />
        </Box>
        <Box w="70%" display="flex" justifyContent="center" pt="4%">
          <SearchCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default InstructorChart;
