import React from "react";
import {
  ResponsiveRadar,
  RadarCustomLayerProps,
  RadarLayerId,
} from "@nivo/radar";
import { useColorMode } from "@chakra-ui/react";

interface RadarChartData {
  [key: string]: string | number;
}

interface RadarChartProps {
  data: RadarChartData[];
  keys: string[];
  indexBy: string;
}

const RadarChart: React.FC<RadarChartProps> = ({ data, keys, indexBy }) => {
  const { colorMode } = useColorMode();

  const customColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

  // Function to get the color for each indexBy name
  const getColor = (name: string) => {
    const index = data.findIndex((item) => item[indexBy] === name);
    return customColors[index % customColors.length];
  };

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy={indexBy}
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={
          colorMode === "light" ? { scheme: "nivo" } : { scheme: "pastel2" }
        }
        fillOpacity={0.6}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
      />
    </div>
  );
};

export default RadarChart;
