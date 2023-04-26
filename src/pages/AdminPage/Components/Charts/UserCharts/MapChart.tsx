import React, { useState, useEffect } from "react";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import css from "./Map.module.scss";
import { Tooltip, Box } from "@chakra-ui/react";

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
  const tooltipOffsetX = 80; // 툴팁의 X축 위치를 조절합니다.
  const tooltipOffsetY = 100; // 툴팁의 Y축 위치를 조절합니다.
  const onMouseOver = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (e.target instanceof Element && e.target.id) {
      // const container = document.getElementById("map-container");

      // console.log("x,y", e.clientX, e.clientY);

      // const scrollLeft =
      //   window.pageXOffset | document.documentElement.scrollLeft;
      // const scrollTop = window.pageYOffset | document.documentElement.scrollTop;

      // console.log("left", scrollLeft);
      // console.log("top", scrollTop);

      setTooltipContent(`${e.target.id}\n총 12명`);
      setTooltip(true);
    }
  };
  return (
    <div id="map-container" style={{ position: "relative", width: "500px" }}>
      <Box
        id="tooltip"
        w="140px"
        height="120px"
        color="white"
        background="gray"
        border="1px solid"
        borderColor="gray.500"
        borderRadius="0"
        boxShadow="md"
        position="absolute"
        top="-10"
        left="350"
        visibility={tooltip ? "visible" : "hidden"}
      >
        {tooltipContent}
      </Box>
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
    </div>
  );
};
export default KoreaMap;
