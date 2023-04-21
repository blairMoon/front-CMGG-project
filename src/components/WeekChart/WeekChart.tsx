import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useColorMode } from "@chakra-ui/react";
interface Props {}
interface DayChartData {
  id: string;

  data: {
    x: string;
    y: number;
  }[];
}

interface DayChartProps {
  data: DayChartData[];
}
export const data: DayChartData[] = [
  {
    id: "us",

    data: [
      {
        x: "월",
        y: 2,
      },

      {
        x: "화",
        y: 3,
      },
      {
        x: "수",
        y: 7,
      },
      {
        x: "목",
        y: 1,
      },
      {
        x: "금",
        y: 7,
      },
      {
        x: "토",
        y: 9,
      },
      {
        x: "일",
        y: 4,
      },
    ],
  },
  {
    id: "germany",

    data: [
      {
        x: "월",
        y: 1,
      },

      {
        x: "화",
        y: 6,
      },
      {
        x: "수",
        y: 3,
      },
      {
        x: "목",
        y: 4,
      },
      {
        x: "금",
        y: 3,
      },
      {
        x: "토",
        y: 1,
      },
      {
        x: "일",
        y: 7,
      },
    ],
  },
];

const DayChart: React.FC<Props> = () => {
  const { colorMode } = useColorMode();
  return (
    <div style={{ height: "300px", margin: "0 auto" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 10,
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "시간",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: colorMode === "light" ? "#3d3d3d" : "white",
              },
            },
          },
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "강의수",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "paired" }}
        lineWidth={3}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-12}
        areaBaselineValue={30}
        areaOpacity={0.1}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
};
export default DayChart;
