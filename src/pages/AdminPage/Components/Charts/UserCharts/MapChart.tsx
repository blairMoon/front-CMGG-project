import React, { useState, useEffect } from "react";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import css from "./Map.module.scss";
import { Tooltip } from "@chakra-ui/react";

interface Props {}

const KoreaMap: React.FC<Props> = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // ...

  const onMouseOver = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const id = e.currentTarget?.getAttribute("id");
    const rect = e.currentTarget?.getBoundingClientRect();

    if (e.target instanceof Element && e.target.id) {
      const pos = e.target.getBoundingClientRect();
      const container = document.getElementById("map-container");
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const svgWidth = 500; // South Korea 컴포넌트의 너비
        const svgHeight = 600; // South Korea 컴포넌트의 높이
        const widthRatio = containerWidth / svgWidth;
        const heightRatio = containerHeight / svgHeight;

        const containerPos = container.getBoundingClientRect();
        let offsetX, offsetY;

        if (e.target.id === "north-gyeongsang") {
          offsetX = -450;
          offsetY = 80;
        } else if (e.target.id === "gangwon") {
          offsetX = -360;
          offsetY = 80;
        } else if (e.target.id === "gyeonggi") {
          offsetX = -290;
          offsetY = 80;
        } else {
          offsetX = -275;
          offsetY = 10;
        }

        // 다양한 화면에서 동일한 위치에 툴팁이 표시되도록 상대적인 위치를 계산합니다.
        setTooltipPosition({
          x: (pos.right - containerPos.left + offsetX) * widthRatio,
          y: (pos.top - containerPos.top + offsetY) * heightRatio,
        });
      }

      setTooltipContent(`${e.target.id}\nTotal 12 people`);
    }
  };

  return (
    <div id="map-container" style={{ position: "relative", width: "500px" }}>
      <Tooltip
        id="tooltip"
        isOpen={true}
        hasArrow
        label={tooltipContent}
        top={tooltipPosition.y > 0 ? tooltipPosition.y : -tooltipPosition.y}
        left={tooltipPosition.x > 0 ? tooltipPosition.x : -tooltipPosition.x}
        w="140px"
        height="70px"
      >
        <SouthKorea
          fill="gray"
          width="500px"
          height="600px"
          className={css.path}
          onMouseOver={onMouseOver}
          data-tip
          data-html={true}
          data-for="korea"
        />
      </Tooltip>
    </div>
  );
};

export default KoreaMap;
