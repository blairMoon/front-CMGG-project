import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import InstructorSideBar from "../../components/SideBar/InstructorSideBar";
interface Props {}

const InstructorPage: React.FC<Props> = (props: Props) => {
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
