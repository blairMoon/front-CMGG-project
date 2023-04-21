import { dataGender } from "../Charts/UserCharts/GenderChart";
import GenderChart from "../Charts/UserCharts/GenderChart";
import { dataAge } from "../Charts/UserCharts/AgeChart";
import AgeChart from "../Charts/UserCharts/AgeChart";
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
  return (
    <div className={css.UserContainer}>
      <div
        style={{
          width: "70%",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingTop: "20px",
        }}
      >
        <div className={css.chartContainer}>
          <span className={css.h1}>Gender Chart</span>
          <GenderChart
            // theme={customTheme}
            data={dataGender}
            colors={["#ff0000", "#00ff00", "#0000ff"]}
          />
        </div>
        <div className={css.chartContainer} style={{ paddingTop: "20px" }}>
          <span className={css.h1}>Age Chart</span>
          <AgeChart data={dataAge} colors={["#ff0000", "#00ff00", "#0000ff"]} />
        </div>
      </div>
    </div>
  );
};

export default User;
