import React, { useState, useEffect } from "react";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import css from "./Map.module.scss";
import { Tooltip } from "@chakra-ui/react";

interface Props {}

const KoreaMap: React.FC<Props> = () => {
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
  const onMouseOver = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const id = e.currentTarget?.getAttribute("id");
    const rect = e.currentTarget?.getBoundingClientRect();

    if (e.target instanceof Element && e.target.id) {
      const pos = e.target.getBoundingClientRect();
      const container = document.getElementById("map-container");
      console.log(e.target.id);
      if (container) {
        if (e.target.id == "north-gyeongsang") {
          const containerPos = container.getBoundingClientRect();
          setTooltipPosition({
            x: pos.right - containerPos.left - 450,
            y: pos.top - containerPos.top + 80,
          });
        } else if (e.target.id == "gangwon") {
          const containerPos = container.getBoundingClientRect();
          setTooltipPosition({
            x: pos.right - containerPos.left - 360,
            y: pos.top - containerPos.top + 80,
          });
        } else if (e.target.id == "gyeonggi") {
          const containerPos = container.getBoundingClientRect();
          setTooltipPosition({
            x: pos.right - containerPos.left - 290,
            y: pos.top - containerPos.top + 80,
          });
        } else {
          const containerPos = container.getBoundingClientRect();
          setTooltipPosition({
            x: pos.right - containerPos.left - 275,
            y: pos.top - containerPos.top + 10,
          });
        }
      }

      setTooltipContent(`${e.target.id}\n총 12명`);
    }
  };

  return (
    <div id="map-container" style={{ position: "relative", width: "500px" }}>
      <Tooltip
        id="tooltip"
        isOpen={true}
        hasArrow
        label={tooltipContent}
        top={tooltipPosition.y}
        left={tooltipPosition.x}
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
