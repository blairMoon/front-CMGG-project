import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import InstructorSideBar from "../../components/Mypage/MySideBar/InstructorSideBar/InstructorSideBar";
interface Props {}

const InstructorPage: React.FC<Props> = (props: Props) => {
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
          <InstructorSideBar />
        </GridItem>
        <GridItem area={"main"} p="2">
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default InstructorPage;
