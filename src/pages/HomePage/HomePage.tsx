import React from "react";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../../services/apollo";
import { removeAccessToken } from "../../services/Token";
import GoDashBoard from "../../components/Home/GoDashBoard";
import Employment from "../../components/Home/Employment";
import Category from "../../components/Home/Category";

import PopularLecture from "../../components/PopularClass/PopularClass";
import NewLecture from "../../components/NewClass/NewClass";
import { Box } from "@chakra-ui/react";
function HomePage(): React.ReactElement {
  const handleLogout = () => {
    removeAccessToken();
    isLoggedInVar(false);
  };
  return (
    <div>
      <GoDashBoard />
      <Category />
      <PopularLecture />
      <NewLecture />
      <Employment />
    </div>
  );
}
export default HomePage;
