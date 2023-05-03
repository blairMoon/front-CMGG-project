import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Stack,
  HStack,
  Flex,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";
import HomeEmploy from "./HomeEmploy";
import Register from "./Register";
interface Props {}
const CardContainer: React.FC<Props> = (props: Props) => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Grid
        pt="120px"
        pb="60px"
        templateAreas={`"register recommend"`}
        gridTemplateColumns={"2fr 1fr"}
        h="500px"
        color="blackAlpha.700"
        maxW="1080px"
        mx="auto"
        gap="10"
      >
        <GridItem
          borderRadius="xl"
          border="1px solid #c9c9c9"
          area={"register"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Text
            color={colorMode === "light" ? "#5e5e5e" : "#c7c7c7"}
            fontSize="18px"
            fontWeight="600"
            position="absolute"
            top="-10px"
            left="-20px"
            bg={colorMode === "light" ? "white" : "#1A202C"}
            px="20px"
            paddingBottom="20px"
          >
            강사 신청
          </Text>
          <Box w="640px">
            <Register />
          </Box>
        </GridItem>
        <GridItem
          borderRadius="xl"
          // bg={colorMode === "light" ? "#F7F7FA" : "#c1c1c9"}
          border="1px solid #c9c9c9"
          area={"recommend"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Text
            color={colorMode === "light" ? "#5e5e5e" : "#c7c7c7"}
            fontSize="18px"
            fontWeight="600"
            position="absolute"
            top="-10px"
            left="-20px"
            bg={colorMode === "light" ? "white" : "#1A202C"}
            px="20px"
            paddingBottom="20px"
          >
            추천 채용
          </Text>
          <Box w="300px">
            <HomeEmploy />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
export default CardContainer;
