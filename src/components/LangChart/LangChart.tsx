import { ResponsivePie } from "@nivo/pie";
import React from "react";

interface PieChartData {
  id: string | number;
  value: number;
  color?: string;
  [key: string]: any;
}

interface MyResponsivePieProps {
  data: PieChartData[];
}
export const data: PieChartData[] = [
  {
    id: "python",
    label: "python",
    value: 170,
    color: "hsl(144, 70%, 50%)",
  },
  {
    id: "django",
    // label: "django",
    value: 440,
    color: "hsl(13, 70%, 50%)",
  },
  {
    id: "react",
    label: "react",
    value: 500,
    color: "hsl(320, 70%, 50%)",
  },
  {
    id: "swift",
    label: "swift",
    value: 300,
    color: "hsl(242, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 100,
    color: "hsl(195, 70%, 50%)",
  },
];
const MyResponsivePie: React.FC<MyResponsivePieProps> = ({ data }) => (
  <div style={{ height: "300px", margin: "0 auto" }}>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "blues" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0]],
      }}
      arcLinkLabelsSkipAngle={8}
      arcLinkLabelsTextOffset={0}
      arcLinkLabelsTextColor={{ theme: "background" }}
      arcLinkLabelsOffset={7}
      arcLinkLabelsDiagonalLength={24}
      arcLinkLabelsStraightLength={21}
      arcLinkLabelsThickness={0}
      arcLinkLabelsColor={{ from: "color", modifiers: [] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 0]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,

          lineWidth: 6,
          spacing: 10,
        },
      ]}
      // legends={[
      //   {
      //     anchor: "bottom",
      //     direction: "row",
      //     justify: false,
      //     translateX: 0,
      //     translateY: 56,
      //     itemsSpacing: 0,
      //     itemWidth: 100,
      //     itemHeight: 18,
      //     itemTextColor: "#999",
      //     itemDirection: "left-to-right",
      //     itemOpacity: 1,
      //     symbolSize: 18,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  </div>
);

export default MyResponsivePie;
