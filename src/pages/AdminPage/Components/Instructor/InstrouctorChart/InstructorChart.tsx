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

interface Props {}

const InstructorChart: React.FC<Props> = (props: Props) => {
  return (
    <Box>
      <Flex w="100%" justifyContent="space-between" h="670px" ml="30px">
        <Box
          bg="white"
          borderRadius="20px"
          border="1px solid black"
          position="relative"
          w="40%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <HighPeople />
        </Box>
        <Box w="50%" display="flex" alignItems="center" justifyContent="center">
          <InputGroup w="50%">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="search" placeholder="검색" />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default InstructorChart;
