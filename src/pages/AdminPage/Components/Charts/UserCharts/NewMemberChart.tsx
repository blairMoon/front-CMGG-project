// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar, BarDatum } from "@nivo/bar";

interface CountryData {
  id: string;
  country: string;
  [key: string]: number | string; // index signature for string keys
  // ...
}
interface MyResponsiveStickProps {
  data: CountryData[];
}
export const dataNewMember: CountryData[] = [
  {
    id: "1",
    country: "1월",

    "1월": 124,
    donutColor: "hsl(287, 70%, 50%)",
  },
  {
    id: "2",
    country: "2월",
    "2월": 700,
    "hot dogColor": "hsl(171, 70%, 50%)",
  },
  {
    id: "3",
    country: "3월",

    "3월": 500,
    burgerColor: "hsl(22, 70%, 50%)",
  },
  {
    id: "4",
    country: "4월",

    "4월": 200,
    sandwichColor: "hsl(317, 70%, 50%)",
  },
  {
    id: "5",
    country: "5월",

    "5월": 302,
    kebabColor: "hsl(113, 70%, 50%)",
  },
  {
    id: "6",
    country: "6월",

    "6월": 100,
    friesColor: "hsl(330, 70%, 50%)",
  },
];
const MyResponsiveBar: React.FC<MyResponsiveStickProps> = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["1월", "2월", "3월", "4월", "5월", "6월"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.5}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    // colors={{ scheme: "nivo" }}
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
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "월",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "신규회원자 수",
      legendPosition: "middle",
      legendOffset: -50,
    }}
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
