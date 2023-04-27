import React from "react";
import css from "./HighPeople.module.scss";
import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaCrown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
interface Props {}

const HighPeople: React.FC<Props> = (props: Props) => {
  return (
    <div className={css.div}>
      <Heading position="absolute" top="7%" left="4%" fontSize="26px">
        Top 3
      </Heading>
      <GiQueenCrown
        color="black"
        className={css.crown}
        size="50px"
        style={{ position: "absolute", top: "22%", left: "22%" }}
      />
      <Box>
        <Circle
          bg="black"
          size="130px"
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
          shadow={"lg"}
        >
          <Image
            src="https://ifh.cc/g/t42vxY.jpg"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
          />
        </Circle>
        <Circle
          bg="black"
          shadow={"lg"}
          size="130px"
          position="absolute"
          bottom="25%"
          left="5%"
        >
          {/* <span>2등</span> */}
          <Image
            src="https://ifh.cc/g/wQ8m88.jpg"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
          />
        </Circle>
        <Circle
          size="130px"
          bg="black"
          position="absolute"
          bottom="25%"
          right="5%"
        >
          {/* <span>3등</span> */}
          <Image
            src="https://ifh.cc/g/cJCznM.jpg"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
          />
        </Circle>
      </Box>
    </div>
  );
};

export default HighPeople;
