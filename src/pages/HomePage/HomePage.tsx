import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../../services/apollo";
import { removeAccessToken } from "../../services/Token";
import GoDashBoard from "../../components/Home/GoDashBoard";
import Employment from "../../components/Home/Employment";
import Category from "../../components/Home/Category";

function HomePage(): React.ReactElement {
  const handleLogout = () => {
    removeAccessToken();
    isLoggedInVar(false);
  };
  return (
    <div>
      <GoDashBoard />
      <Category />
      <Employment />
    </div>
  );
}
export default HomePage;
