import React from "react";
import {
  Box,
  Heading,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Board = () => {
  const data = [
    { id: 1, title: "게시글 1", author: "홍길동", date: "2023-04-25" },
    { id: 2, title: "게시글 2", author: "이몽룡", date: "2023-04-24" },
    { id: 3, title: "게시글 3", author: "성춘향", date: "2023-04-23" },
  ];

  return (
    <VStack
      spacing={8}
      width="100%"
      mx="auto"
      my={12}

      // alignItems="center"
    >
      <Heading fontSize="30px">강사신청</Heading>
      <Flex justifyContent="space-between" width="100%">
        <Table
          ml="100px"
          variant="simple"
          width="100%"
          // alignItems="center"
          // justifyContent="center"
        >
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>제목</Th>
              <Th>작성자</Th>
              <Th>날짜</Th>
              <Th>수락여부</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.title}</Td>
                <Td>{row.author}</Td>
                <Td>{row.date}</Td>
                <Button colorScheme="blue" marginRight="10px">
                  수락
                </Button>
                <Button colorScheme="red">거절</Button>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </VStack>
  );
};

export default Board;
