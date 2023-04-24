import React, { useState, useRef } from "react";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import css from "./Map.module.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface Props {
  offerPosts: OfferPost[];
  seekerPosts: SeekerPost[];
}

interface OfferPost {
  region: string;
  // other properties
}

interface SeekerPost {
  region: string;
  // other properties
}

const KoreaMap: React.FC<Props> = ({ offerPosts, seekerPosts }: Props) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const svgRef = useRef<SVGSVGElement>(null);

  const onMouseOver = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const sido: Record<string, string> = {
      서울특별시: "seoul",
      부산광역시: "busan",
      대구광역시: "daegu",
      인천광역시: "incheon",
      광주광역시: "gwangju",
      대전광역시: "daejeon",
      울산광역시: "ulsan",
      세종특별자치시: "sejong",
      경기도: "gyeonggi",
      강원도: "gangwon",
      충청북도: "chungbuk",
      충청남도: "chungnam",
      전라북도: "jeonbuk",
      전라남도: "jeonnam",
      경상북도: "gyeongbuk",
      경상남도: "gyeongnam",
      제주특별자치도: "jeju",
    };
    const koreaName = Object.keys(sido).find(
      (key) => sido[key] === event.currentTarget.id
    );
    const offerPostsCnt = offerPostsFilteredByRegion(event.currentTarget.id);
    const seekerPostsCnt = seekerPostsFilteredByRegion(event.currentTarget.id);
    const tooltipContent = `
      <h5>${koreaName}</h5>
      진행 중 구인: ${offerPostsCnt}건<br/>
      진행 중 구직: ${seekerPostsCnt}건
    `;
    setTooltipContent(tooltipContent);
  };

  const offerPostsFilteredByRegion = (region: string) => {
    return offerPosts.filter((post) => post.region === region).length;
  };

  const seekerPostsFilteredByRegion = (region: string) => {
    return seekerPosts.filter((post) => post.region === region).length;
  };

  return (
    <div>
      <SouthKorea
        fill="gray"
        width="450px"
        height="700px"
        className={css.path}
        onMouseOver={onMouseOver}
        data-tip={tooltipContent}
        data-html={true}
      />
      <ReactTooltip place="top" className={css.tooltip} />
    </div>
  );
};

export default KoreaMap;
