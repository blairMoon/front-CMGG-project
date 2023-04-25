import React, { useState, useEffect } from "react";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import css from "./Map.module.scss";
import { Tooltip } from "@chakra-ui/react";

interface Props {}

const KoreaMap: React.FC<Props> = () => {
  const [tooltip, setTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const cityMap = {
    seoul: "서울",
    busan: "부산",
    daegu: "대구",
    incheon: "인천",
    gwangju: "광주",
    daejeon: "대전",
    ulsan: "울산",
    sejong: "세종",
    gyeonggi: "경기",
    gangwon: "강원",
    "north-chungcheong": "충북",
    "south-chungcheong": "충남",
    "north-jeolla": "전북",
    "south-jeolla": "전남",
    "north-gyeongsang": "경북",
    "south-gyeongsang": "경남",
    jeju: "제주",
  };
  const onMouseOut = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setTooltip(false);
  };
  const onMouseOver = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const id = e.currentTarget?.getAttribute("id");
    const rect = e.currentTarget?.getBoundingClientRect();

    if (e.target instanceof Element && e.target.id) {
      const pos = e.target.getBoundingClientRect();
      const container = document.getElementById("map-container");

      if (container) {
        const containerPos = container.getBoundingClientRect();
        setTooltipPosition({
          x: e.clientX - containerPos.left - 290,
          y: e.clientY - containerPos.top + 10,
        });
      }

      setTooltipContent(`${e.target.id}\n총 12명`);
      setTooltip(true);
    }
  };

  return (
    <div id="map-container" style={{ position: "relative", width: "500px" }}>
      <Tooltip
        hasArrow={false}
        id="tooltip"
        isOpen={tooltip}
        label={tooltipContent}
        top={tooltipPosition.y}
        left={tooltipPosition.x}
        w="140px"
        height="70px"
        // bg="gray.300"
        border="1px solid"
        borderColor="gray.500"
        borderRadius="0"
      >
        <SouthKorea
          fill="gray"
          width="500px"
          height="600px"
          className={css.path}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          data-tip
          data-html={true}
          data-for="korea"
        />
      </Tooltip>
    </div>
  );
};

export default KoreaMap;
