import React from "react";
import { Box, Stack, HStack, Flex, Text, Button } from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";
import SearchBar from "./SearchBar";
interface Props {}
const Category: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Stack
        pt="100px"
        justifyContent="center"
        alignItems="center" // Add this line to center the child elements vertically
        textAlign="center"
        spacing="8"
      >
        <Box fontSize="20px">배우고, 나누고, 성장하세요</Box>
        <Box w="500px" mx="auto">
          <SearchBar />
        </Box>
        <Box>
          <HStack>
            <Box># 리액트</Box>
            <Box># 스프링</Box>
          </HStack>
          <HStack>
            <Box># 장고</Box>
            <Box># 스위프트</Box>
          </HStack>
        </Box>
      </Stack>
    </div>
  );
};

export default Category;
