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
import EmploymentCard from "../Card/EmploymentCard";
interface Props {}
const CardContainer: React.FC<Props> = (props: Props) => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Grid
        py="120px"
        templateAreas={`"register recommend"`}
        gridTemplateColumns={"2fr 1fr"}
        h="600px"
        color="blackAlpha.700"
        maxW="1080px"
        mx="auto"
        gap="10"
      >
        <GridItem
          bg="#F7F7FA"
          borderRadius="xl"
          area={"register"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>강의 신청 카드</Box>
        </GridItem>
        <GridItem
          borderRadius="xl"
          bg={colorMode === "light" ? "#F7F7FA" : "#c1c1c9"}
          area={"recommend"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box w="280px">
            <EmploymentCard />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
export default CardContainer;
