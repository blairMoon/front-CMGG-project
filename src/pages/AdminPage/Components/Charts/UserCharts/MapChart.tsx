import React, { useState, useEffect } from "react";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import css from "./Map.module.scss";
import { Tooltip, Box, Text, Circle, Flex } from "@chakra-ui/react";
import { scaleLinear } from "d3-scale";
interface Props {}

const KoreaMap: React.FC<Props> = () => {
  const [tooltip, setTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [originalColor, setOriginalColor] = useState<string | null>("#a8d9c8");
  const [tooltipColor, setTooltipColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipLocaiton, setTooltipLocaiton] = useState("");
  // const colorScale = scaleLinear().domain([0, 100]).range(["#FFF", "#06F"]);
  type CityMap = {
    [key: string]: string;
  };

  type GenderData = {
    man: number;
    women: number;
  };

  type AgeData = {
    ageRange: string;
    count: number;
  };

  type CityMapData = {
    [key: string]: {
      totalNum: number;
      gender: GenderData;
      age: number;
    };
  };
  const cityMap: CityMap = {
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
  const cityMapData: CityMapData = {
    seoul: {
      totalNum: 400,
      gender: {
        man: 6,
        women: 6,
      },
      age: 20,
    },
    busan: {
      totalNum: 100,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    daegu: {
      totalNum: 120,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    incheon: {
      totalNum: 100,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    gwangju: {
      totalNum: 50,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    daejeon: {
      totalNum: 200,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    ulsan: {
      totalNum: 20,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    sejong: {
      totalNum: 12,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    gyeonggi: {
      totalNum: 392,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    gangwon: {
      totalNum: 234,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    "north-chungcheong": {
      totalNum: 8,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    "south-chungcheong": {
      totalNum: 34,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    "north-jeolla": {
      totalNum: 12,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    "south-jeolla": {
      totalNum: 231,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    "north-gyeongsang": {
      totalNum: 8,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    "south-gyeongsang": {
      totalNum: 68,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    jeju: {
      totalNum: 1,
      gender: {
        man: 4,
        women: 4,
      },
      age: 30,
    },
    // add more cities here
    // ...
  };

  useEffect(() => {
    // 처음 렌더링 시 각 도시별 기본 색상을 설정합니다.
    const setDefaultColors = () => {
      const paths = document.querySelectorAll("#map-container path");
      paths.forEach((path) => {
        const city = path.id;
        const defaultColor = "#a8d9c8";
        path.setAttribute("fill", defaultColor);
      });
    };

    setDefaultColors();
  }, []);
  const tooltipOffsetX = 80; // 툴팁의 X축 위치를 조절합니다.
  const tooltipOffsetY = 100; // 툴팁의 Y축 위치를 조절합니다.

  const onMouseOut = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (e.target instanceof Element && e.target.id && originalColor) {
      const city = e.target.id;
      const color = "#d3d3d3"; // 해당 지역의 색상 값을 가져옴
      const targetElement = e.target as SVGPathElement;

      setOriginalColor("#d3d3d3");
      targetElement.style.fill = color;
    }

    setTooltip(false);
  };
  const onMouseOver = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const tooltipOffsetX = 80; // 툴팁의 X축 위치를 조절합니다.
    const tooltipOffsetY = 100; // 툴팁의 Y축 위치를 조절합니다.
    if (e.target instanceof Element && e.target.id) {
      const city = e.target.id;
      let color = "#a8d9c8";
      let fontColor = "black";
      if (cityMapData[city].totalNum > 200) {
        color = "#3b6db5" || "#a8d9c8";
        setFontColor("white");
        setTooltipColor("#3b6db5");
      } else if (cityMapData[city].totalNum > 100) {
        color = "#6f99d1" || "gray";
        setFontColor("white");
        setTooltipColor("#6f99d1");
      } else if (cityMapData[city].totalNum > 10) {
        color = "#9dc3f0" || "gray";
        setFontColor("black");
        setTooltipColor("#9dc3f0");
      } else {
        color = "#d1e5f7" || "gray";
        setTooltipColor("#d1e5f7");
        setFontColor("#4f5861");
      }
      // 해당 지역의 색상 값을 가져옴
      const targetElement = e.target as SVGPathElement;
      console.log(e.target.id);
      setOriginalColor(targetElement.getAttribute("fill") || null);
      targetElement.style.fill = color; // 이 부분을 수정합니다.
      setTooltipLocaiton(`${cityMap[city]}`);
      setTooltipContent(
        `총 ${cityMapData[city].totalNum}명 \n남:${cityMapData[city].gender.man}% 여:${cityMapData[city].gender.women}% \n고비율 연령:${cityMapData[city].age}대 `
      );
      setTooltipPosition({
        x: e.clientX + tooltipOffsetX,
        y: e.clientY + tooltipOffsetY,
      });
      setTooltip(true);
    }
  };
  return (
    <div id="map-container" style={{ position: "relative", width: "450px" }}>
      <Box
        // fill="#a8d9c8"
        id="tooltip"
        w="140px"
        height="120px"
        color={fontColor}
        background={tooltipColor}
        border="1px solid "
        borderColor={tooltipColor}
        borderRadius="10px"
        whiteSpace="pre-wrap"
        boxShadow="md"
        position="absolute"
        padding={2}
        top="-10"
        left="350"
        visibility={tooltip ? "visible" : "hidden"}
        zIndex="100"
        fontSize="14px"
      >
        <Text fontWeight="700" fontSize="15px" mb={1}>
          {tooltipLocaiton}
        </Text>
        {tooltipContent}
      </Box>

      <SouthKorea
        width="550px"
        height="600px"
        className={css.path}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        data-tip
        data-html={true}
        data-for="korea"
      />
      <Box position="absolute" left="460px" bottom="20px" fontSize="12px">
        <Flex mb="3px">
          <Circle
            backgroundColor="#3b6db5"
            size="11px"
            marginTop="3px"
            marginRight="8px"
          />

          <Text
            // border="1px solid black"
            color="gray.600"
            width="100px"
          >
            200명이상
          </Text>
        </Flex>
        <Flex mb="3px">
          <Circle
            backgroundColor="#6f99d1"
            size="11px"
            marginTop="3px"
            marginRight="8px"
          />

          <Text
            // border="1px solid black"
            color="gray.600"
            width="100px"
          >
            100명이상
          </Text>
        </Flex>
        <Flex mb="3px">
          <Circle
            backgroundColor="#9dc3f0"
            size="11px"
            marginTop="3px"
            marginRight="8px"
          />

          <Text
            // border="1px solid black"
            color="gray.600"
            width="100px"
          >
            50명이상
          </Text>
        </Flex>
        <Flex mb="3px">
          <Circle
            backgroundColor="#d1e5f7"
            size="11px"
            marginTop="3px"
            marginRight="8px"
          />

          <Text
            // border="1px solid black"
            color="gray.600"
            width="100px"
          >
            1명이상
          </Text>
        </Flex>
      </Box>
    </div>
  );
};
export default KoreaMap;
