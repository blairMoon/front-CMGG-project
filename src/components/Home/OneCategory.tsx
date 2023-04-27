import React from "react";
import { Box, Stack, HStack, Flex, Text, Button } from "@chakra-ui/react";

interface Props {}
const OneCategory: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Stack
        pt="100px"
        justifyContent="center"
        alignItems="center" // Add this line to center the child elements vertically
        textAlign="center"
        spacing="8"
      ></Stack>
    </div>
  );
};

export default OneCategory;
