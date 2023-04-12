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

import { getAllLectures } from "../../../services/api";
import { getMockCarts } from "../../../services/mocks/api";
import { Cart, Carts } from "../../../services/mocks/mock";
import { cartSelectAllState } from "../../../atoms";
import CartItem from "./components/CartItem";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";

interface Props {}

const MyCart: React.FC<Props> = (props: Props) => {
  const [initSelectedItems, setInitSelectedItems] = useState(
    new Array<number>()
  );
  const [selectedItems, setSelectedItems] = useRecoilState(cartSelectAllState);
  const [cartItems, setCartItems] = useState<Carts>();
  const { isLoading } = useQuery(["carts"], getMockCarts, {
    onSuccess(data) {
      setCartItems(data.mock_data);
      const newInitSelectedItems = new Array<number>();
      data.mock_data?.data.map((item: Cart) => {
        newInitSelectedItems.push(item.LectureId);
      });
      setInitSelectedItems(newInitSelectedItems);
      setSelectedItems(newInitSelectedItems);
    },
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems(initSelectedItems);
    } else {
      setSelectedItems(new Array<number>());
    }
  };

  const isAllCheck = (): boolean => {
    if (
      cartItems &&
      cartItems.data &&
      cartItems.data.length > selectedItems.length
    ) {
      return false;
    } else {
      return true;
    }
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
              전체 선택 ({selectedItems?.length})
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
              {/* <Text fontWeight="bold">{subtotal} 원</Text> */}
              <Button
                bgColor="#00c471"
                w="100%"
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
