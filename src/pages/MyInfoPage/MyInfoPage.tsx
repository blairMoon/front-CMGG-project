import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import MySideBar from "../../components/Mypage/MySideBar/MySideBar";

const MyInfoPage: React.FC = () => {
  return (
    <div>
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateColumns={"220px 1fr"}
        w="1300px"
        pt="5"
        pb="5"
        px="4"
        mx="auto"
      >
        <GridItem area={"nav"}>
          <MySideBar />
        </GridItem>
        <GridItem area={"main"} paddingLeft="10">
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyInfoPage;
