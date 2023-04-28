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
} from "@chakra-ui/react";
interface Props {}

const PayDescription: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Flex>
        <Box w="50%" border="1px solid black" h="300px">
          아러알
        </Box>
        <Box w="50%" border="1px solid black">
          아러알
        </Box>
      </Flex>
    </div>
  );
};

export default PayDescription;
