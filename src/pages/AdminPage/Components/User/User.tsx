import { dataGender } from "../Charts/UserCharts/GenderChart";
import GenderChart from "../Charts/UserCharts/GenderChart";
import { dataAge } from "../Charts/UserCharts/AgeChart";
import AgeChart from "../Charts/UserCharts/AgeChart";
import MapChart from "../Charts/UserCharts/MapChart";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  Grid,
  GridItem,
  HStack,
  Box,
  Image,
  Stack,
  Button,
  Divider,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import css from "./User.module.scss";

interface Props {}

const User: React.FC<Props> = (props: Props) => {
  // const onMouseOver2 = (e: any) => {
  //   console.log(e.clientX);
  // };
  return (
    <div
      className={css.userContainer}
      style={{ display: "flex" }}
      // onMouseOver={onMouseOver2}
    >
      <div
        style={{
          marginLeft: "60px",
          marginRight: "60px",
          padding: "15px 5px 15px 15px",
          marginTop: "10px",
          // border: "1px solid black",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div className={css.chartContainer}>
          <span className={css.h1}>Gender Chart</span>
          <div className={css.additionPie}>코딩가든의 회원 남녀 비율</div>
          <GenderChart
            // theme={customTheme}
            data={dataGender}
            colors={["pink", "blue"]}
          />
        </div>
        <div className={css.chartContainer} style={{ paddingTop: "20px" }}>
          <span className={css.h1}>Age Chart</span>
          <div className={css.additionPie}>코딩가든의 회원 나이 비율</div>

          <AgeChart
            data={dataAge}
            colors={["#239d97", "#3abbc2", "#e5eea1", "#f0d166"]}
          />
        </div>
      </div>
      <div
        className={css.chartContainer}
        style={{ paddingTop: "20px", width: "60%", paddingRight: "100px" }}
      >
        <span className={css.h1}>Map Chart</span>
        <div className={css.addition}>
          마우스를 지도 위로 올리면 데이터가 보입니다
        </div>

        <MapChart />
      </div>
    </div>
  );
};

export default User;
