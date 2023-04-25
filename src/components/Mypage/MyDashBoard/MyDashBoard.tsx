import React from "react";
import LangChart from "../../Charts/LangChart";
import DayChart from "../../Charts/WeekChart";
import GrassCalendar from "../../Charts/GrassCalendar";
import RecentLectureCard from "../../Card/RecentLectureCard";
import EmploymentCard from "../../Card/EmploymentCard";
import RecommendCard from "../../Card/RecommendCard";
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
        gridTemplateRows={"30px 340px 340px 370px"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        // h="1200px"
        w="100%"
        gap="20px"
      >
        <GridItem area={"header"} fontSize="20px">
          <HStack spacing="1">
            <Box fontWeight="600">Rami Su</Box>
            <Box>님</Box>
            <Box color="#3d3d3d">
              <HiOutlineChevronRight />
            </Box>
            <Box fontSize="14px">CMGGedu와 74일째 성장 중!</Box>
          </HStack>
        </GridItem>
        <GridItem
          border="1px solid #d9d9d9"
          borderRadius="lg"
          area={"item1"}
          p="20px"
        >
          <RecentLectureCard />
        </GridItem>
        <GridItem
          border="1px solid #d9d9d9"
          borderRadius="lg"
          area={"item2"}
          p="20px"
        >
          <RecommendCard />
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
        <GridItem
          border="1px solid #d9d9d9"
          borderRadius="lg"
          area={"item6"}
          p="20px"
        >
          <EmploymentCard />
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
