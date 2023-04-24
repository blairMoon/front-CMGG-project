import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useColorMode } from "@chakra-ui/react";
import {
  Text,
  Stack,
  HStack,
  Box,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

interface Props {}

interface LangChartData {
  id: string | number;
  value: number;

  [key: string]: any;
}

interface LangChartProps {
  data: LangChartData[];
}

export const data: LangChartData[] = [
  {
    id: "Python",
    // label: "python",
    value: 4,
  },
  {
    id: "django",
    label: "django",
    value: 8,
  },
  {
    id: "React",
    label: "react",
    value: 6,
  },
  {
    id: "Swift",
    label: "swift",
    value: 2,
  },
  {
    id: "JS",
    label: "javascript",
    value: 4,
  },
];

const LangChart: React.FC<Props> = () => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Grid
        templateAreas={`"header header"
                  "langchart langchart"`}
        gridTemplateRows={"1fr 250px "}
        gridTemplateColumns={"1fr 1fr"}
      >
        <GridItem
          area={"header"}
          fontSize="18px"
          color="#3d3d3d"
          fontWeight="600"
          pb="30px"
        >
          <HStack justifyContent="space-between">
            <Box>수강언어</Box>
          </HStack>
        </GridItem>
        <GridItem area={"langchart"}>
          <ResponsivePie
            data={data}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={0.5}
            padAngle={2}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "blues" }}
            borderWidth={1}
            borderColor={{
              theme: "grid.line.stroke",
            }}
            tooltip={({ datum }) => {
              const totalValue = data.reduce(
                (acc, item) => acc + item.value,
                0
              );

              const percentage = (
                (datum.data.value / totalValue) *
                100
              ).toFixed(2);

              return (
                <div
                  style={{
                    color: colorMode === "light" ? "black" : "black",
                    backgroundColor: "white",
                    padding: "8px",
                    fontSize: "12px",
                    borderRadius: "4px",
                    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                    lineHeight: "1.6",
                    fontWeight: "600",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      {datum.data.id} : {percentage}%
                    </div>
                  </div>
                </div>
              );
            }}
            enableArcLinkLabels={false}
            arcLabel="id"
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="#222877"
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default LangChart;
