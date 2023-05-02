// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { Text } from "@chakra-ui/react";
interface CountryData {
  id: string;
  country: string;
  [key: string]: number | string; // index signature for string keys
  // ...
}
interface MyResponsiveStickProps {
  data: CountryData[];
}
export const dataPay2: CountryData[] = [
  {
    id: "1",
    country: "1월",

    "1월": 14340,
    donutColor: "hsl(287, 70%, 50%)",
  },
  {
    id: "2",
    country: "2월",
    "2월": 12340,
    "hot dogColor": "hsl(171, 70%, 50%)",
  },
  {
    id: "3",
    country: "3월",

    "3월": 10000,
    burgerColor: "hsl(22, 70%, 50%)",
  },
  {
    id: "4",
    country: "4월",

    "4월": 18300,
    sandwichColor: "hsl(317, 70%, 50%)",
  },
  {
    id: "5",
    country: "5월",

    "5월": 8000,
    kebabColor: "hsl(113, 70%, 50%)",
  },
  {
    id: "6",
    country: "6월",

    "6월": 11000,
    friesColor: "hsl(330, 70%, 50%)",
  },
  {
    id: "7",
    country: "7월",

    "7월": 4000,
    donutColor: "hsl(287, 70%, 50%)",
  },
  {
    id: "8",
    country: "8월",
    "8월": 10123,
    "hot dogColor": "hsl(171, 70%, 50%)",
  },
  {
    id: "9",
    country: "9월",

    "9월": 6000,
    burgerColor: "hsl(22, 70%, 50%)",
  },
  {
    id: "10",
    country: "10월",

    "10월": 2300,
    sandwichColor: "hsl(317, 70%, 50%)",
  },
  {
    id: "11",
    country: "11월",

    "11월": 9892,
    kebabColor: "hsl(113, 70%, 50%)",
  },
  {
    id: "12",
    country: "12월",

    "12월": 16000,
    friesColor: "hsl(330, 70%, 50%)",
  },
];
const MyResponsiveBar: React.FC<MyResponsiveStickProps> = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={[
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ]}
    indexBy="country"
    margin={{ top: 50, right: 110, bottom: 50, left: 40 }}
    padding={0.5}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={[
      "#f5efa6",
      "#f5dea0",
      "#f3d197",
      "#f2c194",
      "#efb38f",
      "#e69a82",
      "#e9a390",
      "#eda2a0",
      "#eea3ac",
      "#eba5c5",
      "#eba5c5",
      "#d7a2c2",
    ]}
    // fill={[
    //   {
    //     match: {
    //       id: "fries",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "sandwich",
    //     },
    //     id: "lines",
    //   },
    // ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    // axisBottom={{
    //   tickSize: 5,
    //   tickPadding: 5,
    //   tickRotation: 0,
    //   legend: "월",
    //   legendPosition: "middle",
    //   legendOffset: 32,
    // }}
    // axisLeft={{
    //   tickSize: 5,
    //   tickPadding: 5,
    //   tickRotation: 0,
    //   legend: "결제 금액",
    //   legendPosition: "middle",
    //   legendOffset: -60,
    // }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    }}
  />
);
export default MyResponsiveBar;
