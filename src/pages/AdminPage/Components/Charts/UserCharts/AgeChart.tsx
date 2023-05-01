import { ResponsivePie, PieSvgProps } from "@nivo/pie";
import { InheritedColorConfig } from "@nivo/colors";

// import { Datum } from "@nivo/core";
interface PieChartData {
  id: string | number;
  value: number;
  [key: string]: any;
}

interface MyResponsivePieProps {
  data: PieChartData[];
  colors: string[];
}
export const dataAge: PieChartData[] = [
  {
    id: "10대",
    label: "10대",
    value: 10,
  },
  {
    id: "20대",
    label: "20대",
    value: 50,
  },
  {
    id: "30대",
    label: "30대",
    value: 30,
  },
  {
    id: "40대",
    label: "40대",
    value: 10,
  },
];
const MyResponsivePie: React.FC<MyResponsivePieProps> = ({
  data,
  colors,
  ...rest
}) => (
  <div style={{ height: "280px", width: "450px" }}>
    <ResponsivePie
      {...rest}
      data={data}
      colors={colors}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={100}
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
          translateX: 30,
          translateY: 56,
          itemsSpacing: -25,
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
      tooltip={({ datum }) => {
        const totalValue = data.reduce((acc, item) => acc + item.value, 0);

        const percentage = ((datum.data.value / totalValue) * 100).toFixed(2);

        return (
          <div
            style={{
              // color: colorMode === "light" ? "black" : "black",
              backgroundColor: "white",
              padding: "8px",
              fontSize: "12px",
              borderRadius: "4px",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
              lineHeight: "1.6",
              fontWeight: "600",
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
    />
  </div>
);

export default MyResponsivePie;
