import React, { useState } from "react";
import {
  Text,
  Stack,
  HStack,
  Box,
  Flex,
  Grid,
  GridItem,
  Button,
  Progress,
  useColorMode,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllLectures } from "../../services/api";
import { ILectureData } from "../../../typings/LectureData";
import SkeletonRecommend from "../WholeLectures/LectureCard/SkeletonRecommend";

const RecommendCard: React.FC = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isLoading, data } = useQuery(["lectureInfo"], () => getAllLectures());

  const slicedData = data?.data?.slice(0, 10) ?? null;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 9 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 9 ? 0 : prevIndex + 1));
  };
  // src="https://cdn.inflearn.com/public/courses/326905/cover/739f7b4b-1a9f-478f-a6a8-1a13bf58cae3/326905-eng.png"

  return (
    <div>
      {isLoading ? (
        <div>
          <SkeletonRecommend />
        </div>
      ) : (
        <Stack spacing="3">
          <HStack pb="4">
            <Box
              fontWeight="600"
              style={{ color: colorMode === "light" ? "#3d3d3d" : " white" }}
              fontSize="18px"
            >
              추천 강의
            </Box>
            <Tooltip
              hasArrow
              label="수강한 강의 기반으로 추천드려요!"
              placement="top"
              fontSize="12px"
              bg="#2f2f30"
              color="white"
              p="8px 12px"
              borderRadius="lg"
            >
              <Box color="#858585">
                <BsQuestionCircle />
              </Box>
            </Tooltip>
          </HStack>
          <Stack>
            {slicedData && (
              <Image
                h="160px"
                w="100%"
                src={slicedData[currentIndex].thumbnail}
                objectFit="cover"
                onClick={() => {
                  navigate(`/lectures/${slicedData[currentIndex].LectureId}`);
                }}
                cursor="pointer"
              />
            )}
          </Stack>
          {slicedData && (
            <Box fontSize="12px">
              {/* ... */}
              <Text
                fontSize="14px"
                fontWeight="600"
                noOfLines={1}
                onClick={() => {
                  navigate(`/lectures/${slicedData[currentIndex].LectureId}`);
                }}
                cursor="pointer"
              >
                {slicedData[currentIndex].lectureTitle}
              </Text>
              <Text
                onClick={() => {
                  navigate(`/lectures/${slicedData[currentIndex].LectureId}`);
                }}
                cursor="pointer"
              >
                {slicedData[currentIndex].instructor.username}
              </Text>
              <HStack justifyContent="space-between" alignItems="flex-end">
                <Stack
                  spacing="0"
                  onClick={() => {
                    navigate(`/lectures/${slicedData[currentIndex].LectureId}`);
                  }}
                  cursor="pointer"
                >
                  <Text color="#858585">
                    {slicedData[currentIndex].categories.parent.name}ㆍ{" "}
                    {slicedData[currentIndex].categories.name}
                  </Text>
                  <Text color="#858585">
                    {slicedData[currentIndex].lectureFee}
                  </Text>
                </Stack>
                <HStack justifyContent="flex-end" mt="0">
                  <HStack spacing="0" pr="1" fontSize="14px">
                    <Box>{currentIndex + 1}</Box>
                    <Box color="#858585">/10</Box>
                  </HStack>
                  <Button
                    onClick={handlePrev}
                    size="xs"
                    rounded="full"
                    bg="white"
                    color="#858585"
                    px="0"
                    style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)" }}
                  >
                    <FaChevronLeft size="12px" />
                  </Button>
                  <Button
                    onClick={handleNext}
                    size="xs"
                    rounded="full"
                    bg="white"
                    color="#858585"
                    px="0"
                    style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)" }}
                  >
                    <FaChevronRight size="12px" />
                  </Button>
                </HStack>
              </HStack>
            </Box>
          )}
        </Stack>
      )}
    </div>
  );
};

export default RecommendCard;
