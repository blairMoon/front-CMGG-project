import React from "react";
import {
  ResponsiveRadar,
  RadarCustomLayerProps,
  RadarLayerId,
} from "@nivo/radar";
import { Tooltip } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

interface RadarChartData {
  [key: string]: string | number;
}

interface RadarChartProps {
  data: RadarChartData[];
  keys: string[];
  indexBy: string;
}

const CustomTooltip = ({
  id,
  value,
  color,
}: {
  id: string;
  value: number;
  color: string;
}) => {
  return (
    <Tooltip>
      <div style={{ color }}>
        <strong>{id}</strong>: {value}
      </div>
    </Tooltip>
  );
};

const RadarChart: React.FC<RadarChartProps> = ({ data, keys, indexBy }) => {
  const { colorMode } = useColorMode();
  const customColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];
  const lightAreaColors = ["rgb(44, 160, 44,0.5)", "rgb(255, 127, 14,0.7)"];
  const darkAreaColors = ["rgb(195,100,190)", "rgb(160,255,55)"];

  const getOffSet = (index: number) => {
    if (index === 4) {
      return { x: 180, y: 180 };
    } else if (index === 0) {
      return { x: 160, y: 165 };
    } else {
      return { x: 160, y: 160 };
    }
  };

  const customLabelsLayer: React.FC<RadarCustomLayerProps<RadarChartData>> = ({
    indices,
    angleStep,
    centerX,
    centerY,
    radiusScale,
  }) => {
    return (
      <g>
        {indices.map((index, i) => {
          const key = index as string;
          const angle = angleStep * i - Math.PI / 2;
          const labelRadius = radiusScale(1);
          const x = centerX + Math.cos(angle) * (labelRadius + 10);
          const y = centerY + Math.sin(angle) * (labelRadius + 10);

          const offset = getOffSet(i);

          const xOffset = Math.abs(Math.cos(angle)) * offset.x;
          const yOffset = Math.abs(Math.sin(angle)) * offset.y;

          return (
            <text
              key={key}
              x={x + (Math.cos(angle) > 0 ? xOffset : -xOffset)}
              y={y + (Math.sin(angle) > 0 ? yOffset : -yOffset)}
              textAnchor="middle"
              dominantBaseline="central"
              fill={colorMode === "light" ? "black" : "white"}
              style={{
                fontSize: 12,
              }}
            >
              {key}
            </text>
          );
        })}
      </g>
    );
  };

  const customDotsLayer: React.FC<RadarCustomLayerProps<RadarChartData>> = ({
    data,
    keys,
    indices,
    centerX,
    centerY,
    radiusScale,
    angleStep,
    colorByKey,
  }) => {
    return (
      <g>
        {data.map((datum, i) => {
          return keys.map((key, j) => {
            const pointData = {
              index: i,
              indexValue: datum[indexBy],
              key,
              value: datum[key],
            };

            const startAngle = angleStep * i - Math.PI / 2;
            const radius = radiusScale(pointData.value);

            const x = centerX + Math.cos(startAngle) * radius;
            const y = centerY + Math.sin(startAngle) * radius;

            const textOffsetX = pointData.key === "value1" ? -10 : 10;
            const textOffsetY = pointData.key === "value1" ? -10 : 10;

            return (
              <g key={`${key}.${i}`} transform={`translate(${x},${y})`}>
                <circle
                  r={5}
                  stroke={
                    colorMode === "light"
                      ? "rgb(50,50,50,0.5)"
                      : "rgb(215,215,215,0.5)"
                  }
                  fill="transparent"
                />
                <text
                  dx={textOffsetX}
                  dy={textOffsetY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={colorMode === "light" ? "black" : "white"}
                  fontSize={12}
                  fontWeight={600}
                >
                  {pointData.value}
                </text>
              </g>
            );
          });
        })}
      </g>
    );
  };

  const layers: (
    | RadarLayerId
    | React.FC<RadarCustomLayerProps<RadarChartData>>
  )[] = [
    "grid",
    "layers",
    "slices",
    "legends",
    customLabelsLayer,
    customDotsLayer,
  ];

  const dotColorFunction = (d: RadarChartData) => {
    const index = data.findIndex((item) => item[indexBy] === d[indexBy]);
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
        gridLabel={() => null}
        enableDots={true}
        dotSize={10}
        dotColor={dotColorFunction}
        dotBorderWidth={2}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={colorMode === "light" ? lightAreaColors : darkAreaColors}
        fillOpacity={0.9}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        layers={layers}
      />
    </div>
  );
};

export default RadarChart;
