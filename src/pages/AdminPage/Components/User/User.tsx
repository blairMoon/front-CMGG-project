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
import { c } from "msw/lib/glossary-de6278a9";
interface Props {}

const User: React.FC<Props> = (props: Props) => {
  return (
    <div className={css.UserContainer} style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",

          marginLeft: "70px",
          marginTop: "20px",
        }}
      >
        <div className={css.chartContainer}>
          <span className={css.h1}>Gender Chart</span>
          <GenderChart
            // theme={customTheme}
            data={dataGender}
            colors={["pink", "blue"]}
          />
        </div>
        <div className={css.chartContainer} style={{ paddingTop: "20px" }}>
          <span className={css.h1}>Age Chart</span>
          <AgeChart data={dataAge} colors={["#ff0000", "#00ff00", "#0000ff"]} />
        </div>
      </div>
      <div
        className={css.chartContainer}
        style={{ paddingTop: "20px", width: "40%", paddingRight: "100px" }}
      >
        <span className={css.h1}>Map Chart</span>

        <MapChart />
      </div>
    </div>
  );
};

export default User;
