import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useColorMode } from "@chakra-ui/react";

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
          theme: "grid.line.stroke",
        }}
        tooltip={({ datum }) => {
          const totalValue = data.reduce((acc, item) => acc + item.value, 0);

          const percentage = ((datum.data.value / totalValue) * 100).toFixed(2);

          return (
            <div
              style={{
                backgroundColor: "white",
                color: colorMode === "light" ? "black" : "black",
                padding: "6px",
                fontSize: "12px",
                borderRadius: "4px",
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                lineHeight: "1.5",
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
        arcLabelsTextColor="#606fa4"
      />
    </div>
  );
};

export default LangChart;
