import React, { useState, useEffect } from "react";

import { HiUser } from "react-icons/hi";
import { useColorMode } from "@chakra-ui/react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

// Initialize the networkgraph module
HighchartsNetworkgraph(Highcharts);

interface NetWorkData {
  from: string;
  to: string;
}
interface NetWorkNode {
  id: string;
  color: string;
}

interface HighchartsNetworkProps {
  // options?: Highcharts.Options;
  title: string;
  subtitle: string;
  data: NetWorkData[];
  nodes: NetWorkNode[];
}

interface NodeRatio {
  name: string;
  ratio: number;
}

const defaultProps: HighchartsNetworkProps = {
  title: "",
  subtitle: "",
  data: [],
  nodes: [],
};

const HighchartsNetwork: React.FC<HighchartsNetworkProps> = ({
  title,
  subtitle,
  data = defaultProps.data,
  nodes = defaultProps.nodes,
}) => {
  const { colorMode } = useColorMode();
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<NetWorkNode | null>(null);

  if (data.length === 0 || nodes.length === 0) {
    return <div>Nothing</div>;
  }

  const options: Highcharts.Options = {
    chart: {
      type: "networkgraph",
      height: "100%",
      backgroundColor: "transparent",
    },
    title: {
      text: title,
      align: "left",
      style: {
        color:
          colorMode === "light" ? "rgb(40,40,40,0.7)" : "rgb(240,240,240,0.9)",
        fontSize: "25px",
        fontWeight: "500",
      },
    },
    subtitle: {
      text: subtitle,
      align: "left",
      verticalAlign: "bottom",
      style: {
        fontSize: "11px",
        color:
          colorMode === "light" ? "rgb(40,40,40,0.6)" : "rgb(240,240,240,0.7)",
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        type: "networkgraph",
        accessibility: {
          enabled: false,
        },
        layoutAlgorithm: {
          enableSimulation: true,
          friction: -0.9,
        },
        data: data,
        color: "gray",
        dataLabels: {
          enabled: true,
          useHTML: true,
          linkFormat: "",
          formatter: function () {
            const { color } = this.point;
            const iconPathData = HiUser({}).props.children[0].props.d;
            const hiUserIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="24" height="24">
              <path d="${iconPathData}" fill="${color}" />
            </svg>`;

            return hiUserIcon;
          },
        },
        nodes: nodes,
        point: {
          events: {
            mouseOver: function () {
              console.log("hover", this.name);
              const node = nodes.find((node) => node.id === this.name);
              console.log(node);

              if (node) {
                setHoveredNode(node);
                setShowInfoBox(true);
              }
            },
            mouseOut: function () {
              setShowInfoBox(false);
            },
          },
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {showInfoBox && hoveredNode && (
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "80px",
            width: "100px",
            height: "80px",
            border: "1px solid gray",
            borderRadius: "4px",
            padding: "8px",
            backgroundColor:
              colorMode === "light"
                ? "rgba(40, 40, 40, 0.8)"
                : "rgba(240, 240, 240, 0.9)",
            color:
              colorMode === "light"
                ? "rgba(240, 240, 240, 0.9)"
                : "rgb(40, 40, 40)",
          }}
        >
          <strong>{hoveredNode.id}</strong>
        </div>
      )}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default HighchartsNetwork;
