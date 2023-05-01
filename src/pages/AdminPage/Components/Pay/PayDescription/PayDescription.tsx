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
} from "@chakra-ui/react";
interface Props {}

const PayDescription: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Flex justify="space-around">
        <Box w="40%" border="1px solid black" borderRadius="20px" h="100px">
          <Text textAlign="center" mt="20px">
            결제 총 금액
          </Text>
          <Text textAlign="center" pt="5px" fontWeight="700" fontSize="18px">
            2000000000원
          </Text>
        </Box>
        <Box w="40%" border="1px solid black" borderRadius="20px">
          <Text textAlign="center" mt="20px">
            결제 총 건
          </Text>
          <Text textAlign="center" pt="5px" fontSize="18px" fontWeight="700">
            133건
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default PayDescription;
