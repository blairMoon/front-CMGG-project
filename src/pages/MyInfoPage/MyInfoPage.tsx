import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import MySideBar from "../../components/Mypage/MySideBar/MySideBar";
interface Props {}

const MyInfoPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateColumns={"220px 1fr"}
        w="1300px"
        pt="20"
        pb="10"
        px="4"
        gap="1"
        mx="auto"
      >
        <GridItem area={"nav"}>
          <MySideBar />
        </GridItem>
        <GridItem area={"main"} py="2" paddingLeft="10">
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyInfoPage;
