import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useRecoilValue } from "recoil";
import { headerSizeState } from "../../atoms";

export default function Root() {
  const headerSize = useRecoilValue(headerSizeState);
  return (
    <Box>
      <Header />
      <Box height={`${headerSize.height}px`} />
      <Outlet />
      <Footer />
    </Box>
  );
}
