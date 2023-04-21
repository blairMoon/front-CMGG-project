import { ResponsivePie } from "@nivo/pie";
import { InheritedColorConfig } from "@nivo/colors";

// import { Datum } from "@nivo/core";
interface PieChartData {
  id: string | number;
  value: number;
  [key: string]: any;
}
interface MyResponsivePieProps {
  data: PieChartData[];
  colors: string[] | { scheme: string };
}
export const dataGender: PieChartData[] = [
  {
    id: "women",
    label: "women",
    value: 50,
  },
  {
    id: "men",
    label: "men",
    value: 50,
  },
];
const MyResponsivePie: React.FC<MyResponsivePieProps> = ({
  data,
  colors,
  ...rest
}) => (
  <div style={{ height: "280px", width: "50%" }}>
    <ResponsivePie
      data={data}
      {...rest}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={160}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={3}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",

          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",

          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "men",
            color: "pink",
          },
          id: "lines",
        },

        {
          match: {
            id: "women",
          },
          id: "none",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default MyResponsivePie;
