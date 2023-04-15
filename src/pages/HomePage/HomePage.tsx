import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../../services/apollo";
import { removeAccessToken } from "../../services/Token";

function HomePage(): React.ReactElement {
  const handleLogout = () => {
    removeAccessToken();
    isLoggedInVar(false);
  };
  return <div></div>;
}
export default HomePage;
