import React from "react";
import css from "./HighPeople.module.scss";
import {
  Box,
  Circle,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaCrown } from "react-icons/fa";
interface Props {}

const HighPeople: React.FC<Props> = (props: Props) => {
  return (
    <div className={css.div}>
      <FaCrown
        color="pink"
        className={css.crown}
        size="50px"
        style={{ position: "absolute", top: "19%", left: "29%" }}
      />
      <Box>
        <Circle
          size="180px"
          bg="blue.500"
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Image
            src="https://ifh.cc/g/t42vxY.jpg"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
          />
        </Circle>
        <Circle
          size="180px"
          bg="blue.500"
          position="absolute"
          bottom="10%"
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
          size="180px"
          bg="blue.500"
          position="absolute"
          bottom="10%"
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
