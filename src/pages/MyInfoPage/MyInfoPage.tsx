import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import MySideBar from "../../components/SideBar/MySideBar";
interface Props {}

const MyInfoPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Grid
        templateAreas={`"nav main"`}
        // gridTemplateRows={'100px 1fr'}
        gridTemplateColumns={"220px 1fr"}
        w="1150px"
        h="100%"
        pt="120px"
        pb="10"
        px="4"
        gap="1"
        mx="auto"
      >
        <GridItem area={"nav"}>
          <MySideBar />
          {/* <TeacherSideBar /> */}
        </GridItem>
        <GridItem area={"main"} p="2">
          <Outlet />
          {/* <MyLecture /> */}
          {/* <EditMember /> */}
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyInfoPage;
