import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MylectureCard from "../MyLectureCard/MyLectureCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLectureInfo } from "../../../services/api";
import { skeletonArray } from "../../../constant";
import SkeletonCard from "../../WholeLectures/LectureCard/SkeletonCard";
import Seo from "../../SEO/Seo";

interface CalculatedLectureItem {
  id: string;
  lecture: {
    img: string;
    LectureId: number;
    thumbnail: string;
    lectureDescription: string;
    lectureTitle: string;
    targetAudience: string;
    lectureFee: number;
    instructor: {
      username: string;
    };
  };
}

const MyLecture: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery(["lectureInfo"], () =>
    getLectureInfo()
  );
  if (isError) {
    navigate("/notlogin");
    console.log("hello");
  }
  useEffect(() => {
    if (isError) {
      navigate("/notlogin");
    }
  }, [isError, navigate]);

  // console.log(data.calculatedLecture);
  return (
    <div>
      <Grid>
        <Seo title="수강중인 강의" />

        <GridItem mx="auto">
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap="5">
            {!isLoading ? (
              data.calculatedLecture?.length > 0 ? (
                data.calculatedLecture?.map((item: CalculatedLectureItem) => (
                  <GridItem key={item.lecture.LectureId} mx="auto">
                    <MylectureCard
                      lectureNumber={item.lecture.LectureId}
                      key={item.id}
                      img={item.lecture.thumbnail}
                      lectureDescription={item.lecture.lectureDescription}
                      lectureTitle={item.lecture.lectureTitle}
                      targetAudience={item.lecture.targetAudience}
                      instructor={item.lecture.instructor.username}
                      rating={data.ratings[item.lecture.lectureTitle]}
                      lectureFee={item.lecture.lectureFee}
                    />
                  </GridItem>
                ))
              ) : (
                <Box
                  h="60vh"
                  w="70vw"
                  my={8}
                  borderRadius="md"
                  fontSize="xl"
                  fontWeight="semibold"
                >
                  구매한 강의가 없습니다!
                </Box>
              )
            ) : (
              skeletonArray.map((_: number, idx: number) => (
                <GridItem key={idx} mx="auto">
                  <SkeletonCard />
                </GridItem>
              ))
            )}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyLecture;
