import React from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HichartsMore from "highcharts/highcharts-more";
import { useColorMode } from "@chakra-ui/react";

HichartsMore(Highcharts);

type PackedBubbleSeriesOptionsType = SeriesOptionsType & {
  packedbubble?: Highcharts.SeriesPackedbubbleOptions;
};

interface PackedBubbleChartProps {
  id?: string;
}

const PackedBubbleChart: React.FC<PackedBubbleChartProps> = ({ id }) => {
  const { colorMode } = useColorMode();
  const series: PackedBubbleSeriesOptionsType[] = data.map((region) => {
    return {
      name: region.name,
      type: "packedbubble",
      data: region.data.map((country) => {
        return {
          name: country.name,
          value: country.value,
        };
      }),
    };
  });
  const options: Highcharts.Options = {
    chart: {
      type: "packedbubble",
      height: "100%",
      backgroundColor: "transparent",
    },
    title: {
      text: "CMGG 회원의 선호하는 언어 비율",
      align: "left",
      style: {
        color: colorMode === "light" ? "black" : "white",
      },
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}",
    },
    legend: {
      itemStyle: {
        color: colorMode === "light" ? "black" : "white",
      },
    },
    plotOptions: {
      packedbubble: {
        minSize: "30%",
        maxSize: "120%",
        zThreshold: 20,
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02,
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          filter: {
            property: "y",
            operator: ">",
            value: 250,
          },
          style: {
            color: colorMode === "light" ? "black" : "white",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
    },
    series: series,
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ id }}
      />
    </div>
  );
};

const data = [
  {
    name: "Java",
    data: [
      {
        name: "SpringBoot",
        value: 767.1,
      },
      {
        name: "Android",
        value: 74.2,
      },
    ],
  },
  {
    name: "Python",
    data: [
      {
        name: "DJango",
        value: 409.4,
      },
      {
        name: "AI",
        value: 237.1,
      },
    ],
  },
  {
    name: "JavaScript",
    data: [
      {
        name: "React",
        value: 566,
      },
      {
        name: "TypeScript",
        value: 456.3,
      },
      {
        name: "Redux",
        value: 56.3,
      },
      {
        name: "Next.js",
        value: 156.3,
      },
      {
        name: "Vue",
        value: 256.3,
      },
    ],
  },
  {
    name: "Basic",
    data: [
      {
        name: "HTML",
        value: 199,
      },
      {
        name: "CSS",
        value: 195.2,
      },
    ],
  },
  {
    name: "Kotlin",
    data: [
      {
        name: "Android",
        value: 336.5,
      },
      {
        name: "iOS",
        value: 236.5,
      },
    ],
  },
  {
    name: "Swift",
    data: [
      {
        name: "iOS",
        value: 136.5,
      },
    ],
  },
];

export default PackedBubbleChart;
