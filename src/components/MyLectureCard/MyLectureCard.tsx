import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Text,
  Button,
  Stack,
  Image,
  Heading,
  HStack,
  Box,
  Progress,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import StarRating from "../../pages/WholeLecuturePage/StarRating/StarRating";
import { BsPlayCircle } from "react-icons/bs";

interface MylectureCardProps {
  lectureNumber: number;

  lectureDescription: string;
  lectureTitle: string;
  targetAudience: string;
  instructor: string;
  rating: number;
  img: string;
}

const MylectureCard: React.FC<MylectureCardProps> = ({
  lectureNumber,
  img,
  lectureDescription,
  lectureTitle,
  instructor,
  targetAudience,

  rating,
}) => {
  const navigate = useNavigate();
  const MAX_LENGTH = 20;
  let text = lectureTitle;

  if (text.length > MAX_LENGTH) {
    text = text.slice(0, MAX_LENGTH) + "...";
  }

  return (
    <Card
      width={"240px"}
      height={"310px"}
      direction={{ base: "column" }}
      variant="outline"
      overflow="hidden"
    >
      <Box
        onClick={() => {
          navigate(`/lectures/${lectureNumber}`);
        }}
      >
        <Image
          objectFit="cover"
          minH="160"
          height="160"
          src={img}
          alt="Caffe Latte"
          _hover={{ cursor: "pointer" }}
        />
      </Box>
      <Stack>
        <CardBody _hover={{ cursor: "pointer" }}>
          <Box
            onClick={() => {
              navigate(`/lectures/${lectureNumber}`);
            }}
          >
            <Heading
              size="md"
              fontSize="17px"
              h="45"
              _hover={{ cursor: "pointer" }}
            >
              {text}
            </Heading>
            <Text py="2">{instructor}</Text>
          </Box>
          <HStack justify="space-between">
            <StarRating rating={rating} />

            <Text>
              <Button
                px="1"
                zIndex={100}
                type="button"
                bg="ghost"
                onClick={(e) => {
                  // e.preventDefault();

                  navigate(`/lectureplay/${lectureNumber}/1`);
                }}
              >
                <BsPlayCircle size={30} />
              </Button>
            </Text>
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default MylectureCard;
