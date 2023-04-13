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
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getMockCarts } from "../../../services/mocks/api";
import { Cart, Carts } from "../../../services/mocks/mock";
import { cartSelectAllState, SelectCartItems } from "../../../atoms";

import { RequestPayment } from "./components/RequestPay";
import CartItem from "./components/CartItem";

const MyCart: React.FC = () => {
  const [initSelectedItems, setInitSelectedItems] = useState<SelectCartItems>({
    id: new Array<number>(),
    name: new Array<string>(),
    total_price: 0,
  });
  const [cartItems, setCartItems] = useState<Carts>();
  const [selectedItems, setSelectedItems] = useRecoilState(cartSelectAllState);
  const { isLoading } = useQuery(["carts"], getMockCarts, {
    onSuccess(data) {
      setCartItems(data.mock_data);
      let total_price = 0;
      const newInitSelectedIdArr = new Array<number>();
      const newInitSelectedNameArr = new Array<string>();
      data.mock_data?.data.map((item: Cart) => {
        newInitSelectedIdArr.push(item.LectureId);
        newInitSelectedNameArr.push(item.lectureTitle);
        total_price += item.lectureFee;
      });
      setInitSelectedItems({
        id: newInitSelectedIdArr,
        name: newInitSelectedNameArr,
        total_price: total_price,
      });
      setSelectedItems({
        id: newInitSelectedIdArr,
        name: newInitSelectedNameArr,
        total_price: total_price,
      });
    },
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems(initSelectedItems);
    } else {
      setSelectedItems({
        id: new Array<number>(),
        name: new Array<string>(),
        total_price: 0,
      });
    }
  };

  const isAllCheck = (): boolean => {
    if (
      cartItems &&
      cartItems.data &&
      cartItems.data.length > selectedItems.id.length
    ) {
      return false;
    } else {
      return true;
    }
  };

  const getPaymentData = () => {
    const name = selectedItems.name.join("/");
    const paymentData = {
      name: name,
      amount: selectedItems.total_price,
      buyer_email: "buyer@naver.com",
      buyer_name: "김현수",
      buyer_tel: "01012345678",
      lectures: selectedItems.id,
      buyer_id: "buyerId",
    };
    return paymentData;
  };

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
            <Checkbox
              size="lg"
              borderColor="gray"
              colorScheme="green"
              isChecked={isAllCheck()}
              onChange={handleCheckboxChange}
            >
              전체 선택 ({selectedItems?.id.length}) (
              {selectedItems?.total_price})
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
              right="0"
              w="80%"
              minW="650px"
              bgColor="white"
              justifyContent="space-between"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.08)"
            >
              <Text fontWeight="bold">{selectedItems.total_price} 원</Text>
              <RequestPayment {...getPaymentData()} />
            </HStack>
          </VStack>
        </VStack>
      ) : null}
    </VStack>
  );
};
export default MyCart;
