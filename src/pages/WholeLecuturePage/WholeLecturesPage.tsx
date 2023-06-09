import React from "react";
import { Flex } from "@chakra-ui/react";
import LectureCard from "../../components/WholeLectures/LectureCard/LectureCard";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import WholeLectures from "../../components/WholeLectures/WholeLectures";
import Category from "../../components/WholeLectures/Category/Category";
import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Button,
  InputRightAddon,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
// import {}

interface Props {}

const WholeLecturePage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Grid
        templateAreas={`"nav main"`}
        // gridTemplateRows={'100px 1fr'}
        gridTemplateColumns={"220px 1fr"}
        w="1300px"
        pt="5"
        pb="5"
        px="4"
        mx="auto"
      >
        <GridItem area={"nav"}>
          <Category />
        </GridItem>
        <GridItem area={"main"} py="2" paddingLeft="10">
          <WholeLectures />
        </GridItem>
      </Grid>
    </div>
  );
};

export default WholeLecturePage;
