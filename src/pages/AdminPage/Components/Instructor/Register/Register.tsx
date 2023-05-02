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
import { RecoilState, atom } from "recoil";
import { SearchIcon } from "@chakra-ui/icons";
import ModalRegister from "./ModalRegisterAdmin/ModalRegisterAdmin";
import ModalSuccess from "./ModalSuccess/ModalSuccess";
import { booleanOpenState } from "./../../../../../../src/atoms";

import { useRecoilState, useRecoilValue } from "recoil";

type Data = {
  id: number;
  title: string;
  author: string;
  date: string;
  introduction: string;
  isDone: null | boolean;
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
      isDone: null,
    },
    {
      id: 2,
      title: "파이썬",
      author: "현수",
      date: "2023-04-24",
      introduction:
        "안녕하세요 저는 현수입니다 저는 백개발자이며 파이썬를 상당히 잘 다루는 사람이기 때문에 자신있게 가르칠 수 있습니다",
      isDone: null,
    },
    {
      id: 3,
      title: "타스",
      author: "과녈",
      date: "2023-04-23",
      introduction:
        "안녕하세요 저는 과녈입니다 저는 백개발자이며 파이썬를 상당히 잘 다루는 사람이기 때문에 자신있게 가르칠 수 있습니다",
      isDone: null,
    },
  ];

  const [booleanOpen, setBooleanOpen] = useRecoilState(booleanOpenState);
  const [selectedData, setSelectedData] = useState<Data | null>(null);
  const [data1, setData1] = useState<Data[]>(data);
  const handleOpenModal = (data: Data) => {
    setSelectedData(data);
    setBooleanOpen(true);
  };
  const [accept, setAccept] = useState<null | boolean>(null);

  const handleAccept = (id: number, accept: boolean | null) => {
    const newData = data1.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: accept,
        };
      } else {
        return item;
      }
    });
    setData1(newData);
  };

  const [isOpenSucess, setIsOpenSucess] = useState(false);
  const handleCloseModal = () => {
    setIsOpenSucess(false);
    setBooleanOpen(false);
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
            {data1.map((row) => (
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
                  {/* <Button colorScheme="gray" marginRight="10px" size={"sm"}>
                    미처리
                  </Button> */}
                  <Td>
                    {row.isDone === null ? (
                      <Button colorScheme="gray" marginRight="10px" size={"sm"}>
                        미처리
                      </Button>
                    ) : row.isDone === true ? (
                      <Button colorScheme="blue" marginLeft="10px" size={"sm"}>
                        수락
                      </Button>
                    ) : (
                      <Button colorScheme="red" marginLeft="10px" size={"sm"}>
                        거부
                      </Button>
                    )}
                  </Td>
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
        isOpen={booleanOpen}
        data={selectedData}
        onClose={handleCloseModal}
        handleAccept={(id: number, accept: boolean | null) => {
          if (selectedData) {
            handleAccept(selectedData.id, accept);
          }
        }}
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
