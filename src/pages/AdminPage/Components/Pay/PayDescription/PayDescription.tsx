import React from "react";
import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
import getAddCommas from "./../../../../../../src/utils/getAddCommas";
interface Props {}

const money = getAddCommas(20000000);

const PayDescription: React.FC<Props> = (props: Props) => {
  const currentUrl = window.location.href;
  const isCurrentPageTwo = currentUrl.endsWith("/admin/pay/2");

  return (
    <div style={{ position: "relative" }}>
      <Flex justify="space-around">
        <Link
          href="/admin/pay/1"
          w="40%"
          // border="1px solid black"
          borderRadius="20px"
          h="100px"
          bg="#8eb5dc"
          color="gray.600"
          border={!isCurrentPageTwo ? "4px solid #7090af" : "none"}
          _hover={{ textDecor: "none" }}
        >
          <Text textAlign="center" mt="20px">
            결제 총 금액
          </Text>
          <Text textAlign="center" pt="5px" fontWeight="700" fontSize="18px">
            {money}원
          </Text>
        </Link>
        <Link
          href="/admin/pay/2"
          w="40%"
          borderRadius="20px"
          bg="#dc9fc6"
          color="gray.600"
          border={isCurrentPageTwo ? "4px solid #a17592" : "none"}
          _hover={{ textDecor: "none" }}
        >
          <Text textAlign="center" mt="20px">
            결제 총 건
          </Text>
          <Text textAlign="center" pt="5px" fontSize="18px" fontWeight="700">
            133건
          </Text>
        </Link>
      </Flex>
      <Text position="absolute" fontSize="11px" left="1000px" bottom="-30px">
        {isCurrentPageTwo ? "기준 단위:  건" : "기준 단위: 10000원"}
      </Text>
    </div>
  );
};

export default PayDescription;
