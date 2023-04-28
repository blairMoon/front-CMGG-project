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
} from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";
interface Props {}
const CardContainer: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Grid
        py="120px"
        templateAreas={`"register recommend"`}
        gridTemplateColumns={"2fr 1fr"}
        h="600px"
        color="blackAlpha.700"
        fontWeight="bold"
        maxW="1100px"
        mx="auto"
      >
        <GridItem
          bg="#F7F7FA"
          area={"register"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>강의 신청 카드</Box>
        </GridItem>
        <GridItem
          bg="#769dd6"
          area={"recommend"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>추천 채용 공고 카드</Box>
        </GridItem>
      </Grid>
    </div>
  );
};
export default CardContainer;
