import React from "react";
// import css from "./HighPeople.module.scss";

import { GiQueenCrown } from "react-icons/gi";
import { Box, Flex, Image, Img, Text } from "@chakra-ui/react";
import { PathString } from "react-hook-form";
// import Image from "next/image";

interface Props {}

interface RankingCardProps {
  rank: PathString;
  imageSrc: string;
  name: string;
  comment: string;
}

const RankingCard: React.FC<RankingCardProps> = ({
  rank,
  imageSrc,
  name,
  comment,
}) => {
  return (
    // <Flex
    //   flexDirection="row"
    //   alignItems="center"
    //   justifyContent="flex-start"
    //   width="100%"
    //   height="130px"
    //   padding="10px"
    // >
    <div>
      <Flex w="400px">
        <Img
          width="50px"
          height="40px"
          // border="1px solid black"
          // padding={6}
          src={rank}
        ></Img>
        <Box>
          <Image
            src={imageSrc}
            alt={name}
            width="100px"
            height="90px"
            objectFit="cover"
            borderRadius="10px"
            // className={css.image}
          />
        </Box>
        <Box
          w="200px"
          textAlign="center"
          // p="10%"
          fontWeight={500}
          fontSize="20px"
        >
          {name}
          <Text fontSize="11px">{comment}</Text>
        </Box>
      </Flex>
    </div>
  );
};
export default RankingCard;
