import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Text,
  Button,
  Stack,
  Image,
  Heading,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import StarRating from "../StarRating/StarRating";

interface LectureCardProps {
  lectureNumber: number;

  lectureDescription: string;
  lectureTitle: string;
  targetAudience: string;
  instructor: string;
  rating: number;
    img: string;
    reviewsNum: number;
}
const LectureCard: React.FC<LectureCardProps> = ({
  lectureNumber,
  img,
  lectureDescription,
  lectureTitle,
  instructor,
  targetAudience,

  rating,
  reviewsNum,
}) => {
  const MAX_LENGTH = 100;
  let text = lectureDescription;

  if (text.length > MAX_LENGTH) {
    text = text.slice(0, MAX_LENGTH) + "...";
  }

  const MAX_LENGTH2 = 20;
  let textTitle = lectureTitle;

  if (textTitle.length > MAX_LENGTH2) {
    textTitle = textTitle.slice(0, MAX_LENGTH2) + "...";
  }

  return (
    <Link to={`/lectures/${lectureNumber}`}>
      <Card
        width={"250px"}
        height={"300px"}
        direction={{ base: "column" }}
        variant="outline"
        _hover={{ background: "rgba(0, 0, 0, 0.4 )", zIndex: 10 }}
        overflow="hidden"
      >
        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
          zIndex={10}
          width={"250px"}
          height={"300px"}
          cursor="pointer"
          justifyContent="space-between"
          opacity="0"
          _hover={{
            opacity: "1",
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 10,
          }}
          padding="15px"
        >
          <Stack>
            <Heading size="md" color="white" pb="10px">
              {textTitle}
            </Heading>
            <Text
              fontSize="14px"
              color="white"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {text}
            </Text>
          </Stack>
          <Text color="red">{targetAudience}</Text>
        </Box>
        <Image
          objectFit="cover"
          // maxW={{ base: '100%', sm: '100%' }}
          minH="160"
          height="160"
          src={img}
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md" fontSize="17px" h="45">
              {textTitle}
            </Heading>
            <Text py="2">{instructor}</Text>

            <HStack spacing="3px">
              <StarRating rating={rating} />
              <Text fontSize="12" fontWeight="600">
                ({reviewsNum})
              </Text>
            </HStack>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default LectureCard;
