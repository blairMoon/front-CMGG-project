import React from "react";

import PopularLecture from "../../components/PopularClass/PopularClass";
import NewLecture from "../../components/NewClass/NewClass";
import { Box } from "@chakra-ui/react";
function HomePage(): React.ReactElement {
  return (
    // <div>
    <Box padding="20px 0">
      <PopularLecture />
      <NewLecture />
    </Box>
  );
}
export default HomePage;
