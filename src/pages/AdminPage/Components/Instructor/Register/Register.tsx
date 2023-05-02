import React, { useState } from "react";
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
import ModalRegister from "./ModalRegisterAdmin/ModalRegisterAdmin";
import ModalSuccess from "./ModalSuccess/ModalSuccess";
type Data = {
  id: number;
  title: string;
  author: string;
  date: string;
  introduction: string;
};
const Board = () => {
  const data = [
    {
      id: 1,
      title: "리액트",
      author: "뚜니",
      date: "2023-04-25",
      introduction:
        "안녕하세요 저는 뚜니입니다 저는 프론트엔드개발자이며 리액트를 상당히 잘 다루는 사람이기 때문에 자신있게 가르칠 수 있습니다",
    },
    {
      id: 2,
      title: "파이썬",
      author: "현수",
      date: "2023-04-24",
      introduction:
        "안녕하세요 저는 현수입니다 저는 백개발자이며 파이썬를 상당히 잘 다루는 사람이기 때문에 자신있게 가르칠 수 있습니다",
    },
    {
      id: 3,
      title: "타스",
      author: "과녈",
      date: "2023-04-23",
      introduction:
        "안녕하세요 저는 과녈입니다 저는 백개발자이며 파이썬를 상당히 잘 다루는 사람이기 때문에 자신있게 가르칠 수 있습니다",
    },
  ];

  const [selectedData, setSelectedData] = useState<Data | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = (data: Data) => {
    setSelectedData(data);
    setIsOpen(true);
  };
  const [isOpenSucess, setIsOpenSucess] = useState(false);
  const handleCloseModal = () => {
    setIsOpenSucess(false);
    setIsOpen(false);
    setSelectedData(null);
  };
  return (
    <VStack
      spacing={8}
      width="100%"
      mx="auto"
      my={1}

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
          <Thead textAlign="center">
            <Tr>
              <Th>ID</Th>
              <Th>신청분야</Th>
              <Th>작성자</Th>
              <Th>날짜</Th>
              <Th>현재 상태</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr
                key={row.id}
                onClick={() => handleOpenModal(row)}
                style={{ cursor: "pointer", fontWeight: "600" }}
              >
                <Td>{row.id}</Td>
                <Td>{row.title}</Td>
                <Td>{row.author}</Td>
                <Td>{row.date}</Td>

                <Td>
                  <Button colorScheme="gray" marginRight="10px" size={"sm"}>
                    미처리
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
      <Button
        bg="gray"
        color="white"
        _hover={{ bg: "red" }}
        onClick={() => {
          setIsOpenSucess(true);
        }}
      >
        심사 처리
      </Button>
      <ModalRegister
        isOpen={isOpen}
        data={selectedData}
        onClose={handleCloseModal}
      />
      <ModalSuccess
        isOpen={isOpenSucess}
        onClose={handleCloseModal}
        onConfirm={() => {
          setIsOpenSucess(false);
          alert("심사처리완료");
        }}
      />
    </VStack>
  );
};

export default Board;
