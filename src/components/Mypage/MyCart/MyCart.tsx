import React, { useEffect, useState, useLayoutEffect } from "react";
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
import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllLectures } from "../../../services/api";
import { getMockCarts } from "../../../services/mocks/api";
import { Cart, Carts } from "../../../services/mocks/mock";
import { default_cart } from "../../../services/mocks/mock_data";
import CartItem from "./components/CartItem";

interface Props {}

const MyCart: React.FC<Props> = (props: Props) => {
  const [cartItems, setCartItems] = useState<Carts>();
  const { isLoading } = useQuery(["carts"], getMockCarts, {
    onSuccess(data) {
      setCartItems(data.mock_data);
    },
  });

  return (
    <VStack pb="8vh" overflowX="hidden" minW="800px">
      {!isLoading ? (
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
            <Checkbox size="lg" borderColor="gray" colorScheme="green">
              전체 선택 ({cartItems?.data?.length})
            </Checkbox>
          </VStack>
          <HStack justifyContent="space-between" w="100%">
            <VStack spacing={6} w="100%" mt="5">
              {cartItems?.data.map((item: Cart) => (
                <CartItem key={item.LectureId} {...item} />
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
              {/* <Text fontWeight="bold">{subtotal} 원</Text> */}
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
      ) : null}
    </VStack>
  );
};
export default MyCart;
