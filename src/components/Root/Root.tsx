import { Box } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Abc from "../Header/Header";
export default function Root() {
  return (
    <Box>
      <Abc />
      <Outlet />
      <Footer />
    </Box>
  );
}
