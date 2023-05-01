import { ResponsiveLine } from "@nivo/line";
import React from "react";

type DataType = {
  id: string;
  color: string;
  data: Array<{ x: string | number; y: number | null }>;
};

interface MyResponsiveLineProps {
  data: DataType[];
}
export const dataPay: DataType[] = [
  {
    id: "2022",
    color: "hsl(167, 70%, 50%)",
    data: [
      {
        x: "1월",
        y: 20,
      },
      {
        x: "2월",
        y: 25,
      },
      {
        x: "3월",
        y: 21,
      },
      {
        x: "4월",
        y: 30,
      },
      {
        x: "5월",
        y: 40,
      },
      {
        x: "6월",
        y: 34,
      },
      {
        x: "7월",
        y: 39,
      },
      {
        x: "8월",
        y: 21,
      },
      {
        x: "9월",
        y: 30,
      },
      {
        x: "10월",
        y: 38,
      },
      {
        x: "11월",
        y: 23,
      },
      {
        x: "12월",
        y: 32,
      },
    ],
  },

  {
    id: "2023",
    color: "hsl(214, 70%, 50%)",
    data: [
      {
        x: "1월",
        y: 38,
      },
      {
        x: "2월",
        y: 21,
      },
      {
        x: "3월",
        y: 30,
      },
      {
        x: "4월",
        y: 20,
      },
      {
        x: "5월",
        y: 24,
      },
      {
        x: "6월",
        y: 24,
      },
      {
        x: "7월",
        y: 38,
      },
      {
        x: "8월",
        y: 25,
      },
      {
        x: "9월",
        y: 21,
      },
      {
        x: "10월",
        y: 35,
      },
      {
        x: "11월",
        y: 31,
      },
      {
        x: "12월",
        y: 32,
      },
    ],
  },
];
const MyResponsiveLine: React.FC<MyResponsiveLineProps> = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: 20,
      max: 40,
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
      legend: "transportation",
      legendOffset: 45,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -50,
      legendPosition: "middle",
    }}
    colors={{ scheme: "paired" }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    tooltip={({ point }) => {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "8px",
            fontSize: "12px",
            borderRadius: "4px",
            boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
            lineHeight: "1.6",
            fontWeight: "600",
          }}
        >
          {parseInt(point.id)}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            {`${point.data.x}`}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {`${point.data.y}%`}
          </div>
        </div>
      );
    }}
  />
);

export default MyResponsiveLine;
