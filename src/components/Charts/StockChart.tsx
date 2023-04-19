import React, { useEffect, useState } from "react";
import Highcharts, { SeriesLineOptions } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useColorMode } from "@chakra-ui/react";

const StockChart: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({});
  const { colorMode } = useColorMode();

  useEffect(() => {
    const seriesOptions: SeriesLineOptions[] = [];
    const names = ["MSFT", "AAPL", "GOOG"];
    const colors = ["rgb(254,215,0)", "rgb(10,246,213)", "rgb(190,20,248)"];
    const success = (name: string, data: any) => {
      const i = names.indexOf(name);
      seriesOptions[i] = {
        type: "line",
        name: name,
        data: data,
        color: colors[i],
      };

      if (seriesOptions.filter(Boolean).length === names.length) {
        createChart();
      }
    };

    const createChart = () => {
      const textColor = colorMode === "light" ? "black" : "silver";

      setChartOptions({
        chart: {
          backgroundColor: "transparent",
        },
        rangeSelector: {
          selected: 4,
        },
        title: {
          text: "월말 정산",
          style: {
            color: textColor,
            fontSize: "25px",
          },
        },

        yAxis: {
          labels: {
            formatter: function () {
              return (Number(this.value) > 0 ? " + " : "") + this.value + "%";
            },
          },
          plotLines: [
            {
              value: 0,
              width: 2,
              color: "silver",
            },
          ],
        },
        plotOptions: {
          series: {
            compare: "percent",
            showInNavigator: true,
          },
        },
        legend: {
          itemStyle: {
            color: colorMode === "light" ? "black" : "white",
          },
        },
        tooltip: {
          pointFormat:
            '<span style="color:{"series.color"}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true,
        },
        series: seriesOptions,
      });
    };

    names.forEach((name) => {
      fetch(
        `https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/${name.toLowerCase()}-c.json`
      )
        .then((response) => response.json())
        .then((data) => success(name, data));
    });
  }, [colorMode]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default StockChart;
