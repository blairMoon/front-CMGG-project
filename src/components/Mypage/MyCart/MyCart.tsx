import React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Text,
  Divider,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { getAllLectures } from "../../../services/api";
import "./MyCart.scss";

interface Props {}

const MyCart: React.FC<Props> = (props: Props) => {
  const { data: lectures, isLoading } = useQuery(["carts"], getAllLectures, {
    onSuccess(data) {
      console.log("data", data);
    },
  });
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      lectureTitle: "지브러시 세계로 떠나는 여행자 가이드 (Zbrush)\n대시보드",
      lectureFee: 66000,
      lectureDifficulty: "입문자",
      isChecked: true,
      thumbnail:
        "https://cdn.inflearn.com/public/courses/326174/cover/b0536120-7de3-4aa8-8266-97cf3881e87d",
    },
    {
      id: 2,
      lectureTitle: "비전공자를 위한 진짜 입문 올인원 개발 부트캠프\n대시보드",
      lectureFee: 143000,
      lectureDifficulty: "입문자",
      isChecked: true,
      thumbnail:
        "https://cdn.inflearn.com/public/courses/326364/cover/99d3cdc2-e6fe-44f5-a235-0563c951bfde/326364-eng.jpg",
    },
    {
      id: 3,
      lectureTitle: "타입스크립트 입문 - 기초부터 실전까지\n대시보드",
      lectureFee: 55000,
      lectureDifficulty: "초급자",
      isChecked: true,
      thumbnail:
        "https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a",
    },
    {
      id: 4,
      lectureTitle: "HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌1)\n대시보드",
      lectureFee: 46200,
      lectureDifficulty: "초급자",
      isChecked: true,
      thumbnail:
        "https://cdn.inflearn.com/public/courses/325450/course_cover/a15141ac-4d33-4f6d-a38b-3a0b5773031c/webdesign-cover-03.png",
    },
  ]);

  const handleItemDelete = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.lectureFee,
    0
  );
  const total = subtotal + 10;

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    console.log("check");
    setIsChecked((isCheck) => !isCheck);
  };

  return (
    <VStack pb="8vh" overflowX="hidden" minW="800px">
      <VStack
        w="100%"
        maxW="1300px"
        alignItems="flex-start"
        p="10"
        px="20"
        pos="relative"
      >
        <VStack
          w="100%"
          alignItems="flex-start"
          pb={15}
          textAlign="center"
          boxShadow="0 5px 5px -5px"
        >
          <Heading fontSize="27px" fontWeight="bold" mb="10">
            수강바구니
          </Heading>
          <Checkbox
            size="lg"
            borderColor="gray"
            colorScheme="green"
            checked={isChecked}
            onChange={handleCheckboxChange}
          >
            전체 선택 ({cartItems.length})
          </Checkbox>
        </VStack>
        <HStack justifyContent="space-between" w="100%">
          <VStack spacing={6} w="100%" mt="5">
            {cartItems.map((item) => (
              <Box w="100%">
                <HStack
                  key={item.id}
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  borderRadius="md"
                  w={"100%"}
                  my="1"
                >
                  <Checkbox
                    size="lg"
                    borderColor="gray"
                    colorScheme="green"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  ></Checkbox>
                  <div className="card">
                    <Image src={item.thumbnail} alt="Card Image" />
                    <HStack w="100%" justifyContent="space-between">
                      <div className="card-center">
                        <h3 className="card-title">{item.lectureTitle}</h3>
                        <p className="card-description">
                          {item.lectureDifficulty}
                        </p>
                        <Text fontSize="md" color="gray.500">
                          {item.lectureFee}원
                        </Text>
                      </div>

                      <div className="card-right">
                        <HStack>
                          <Button colorScheme="green">Buy</Button>
                          <Button>Delete</Button>
                        </HStack>
                      </div>
                    </HStack>
                  </div>
                </HStack>
              </Box>
            ))}
          </VStack>
        </HStack>
        <Divider w="100%" />
        <VStack w="100%">
          <HStack
            pos="fixed"
            h="8vh"
            px="20"
            pl="45"
            bottom="0"
            w="95%"
            minW="650px"
            maxW="1200px"
            bgColor="white"
            justifyContent="space-between"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.08)"
          >
            <Text fontWeight="bold">{subtotal} 원</Text>
            <Button
              bgColor="#00c471"
              w="85%"
              p="8"
              borderRadius="5px"
              color="white"
              fontSize="16"
              py="15"
              fontWeight="bold"
            >
              구매하기
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default MyCart;
