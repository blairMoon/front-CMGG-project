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
      <Flex w="400px" justify="center" marginBottom="30px">
        <Img mt="10px" width="65px" height="65px" src={rank}></Img>
        <Box>
          <Image
            src={imageSrc}
            alt={name}
            width="100px"
            height="90px"
            objectFit="cover"
            borderRadius="8px"
            // className={css.image}
          />
        </Box>
        <Box
          w="200px"
          paddingLeft="50px"
          paddingTop="20px"
          textAlign="left"
          // p="10%"
          fontWeight={700}
          display="flex"
          flexDirection="column"
          // alignItems="center"
          fontSize="17px"
        >
          {name}
          <Text fontSize="11px" pt="5px">
            {comment}
          </Text>
        </Box>
      </Flex>
    </div>
  );
};
export default RankingCard;
