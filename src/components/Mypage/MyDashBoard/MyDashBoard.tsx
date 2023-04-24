import React from "react";
import LangChart from "../../Charts/LangChart";
import DayChart from "../../Charts/WeekChart";
import GrassCalendar from "./GrassCalendar/GrassCalendar";
import { Grid, GridItem, Text, Box, HStack } from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";

const MyDashBoard: React.FC = () => {
  return (
    <div>
      <Grid
        templateAreas={`"header header header"
                  "item1 item2 item3"
                  "item4 item4 item6"
                  "grasschart grasschart grasschart"`}
        gridTemplateRows={"30px 1fr 340px 370px"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        h="1200px"
        gap="20px"
      >
        <GridItem area={"header"} fontSize="20px">
          <HStack spacing="1">
            <Box fontWeight="600">Rami Su</Box>
            <Box>님</Box>
            <Box>
              <HiOutlineChevronRight />
            </Box>
            <Box fontSize="14px">CMGGedu와 74일째 성장 중!</Box>
          </HStack>
        </GridItem>
        <GridItem border="1px solid #d9d9d9" borderRadius="lg" area={"item1"}>
          최근 학습 강의
        </GridItem>
        <GridItem border="1px solid #d9d9d9" borderRadius="lg" area={"item2"}>
          유저 로그 or 아무 차트
        </GridItem>
        <GridItem
          border="1px solid #d9d9d9"
          borderRadius="lg"
          area={"item3"}
          p="20px"
        >
          <LangChart />
        </GridItem>
        <GridItem
          border="1px solid #d9d9d9"
          borderRadius="lg"
          area={"item4"}
          p="20px"
        >
          <DayChart />
        </GridItem>
        <GridItem border="1px solid #d9d9d9" borderRadius="lg" area={"item6"}>
          채용공고
        </GridItem>
        <GridItem
          border="1px solid #d9d9d9"
          borderRadius="xl"
          area={"grasschart"}
          p="20px"
        >
          <GrassCalendar />
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyDashBoard;
