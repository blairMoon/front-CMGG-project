import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MylectureCard from "../../../components/Mypage//MyLectureCard/MyLectureCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getAllLectures } from "../../../services/api";
import { skeletonArray } from "../../../constant";
import SkeletonCard from "../../../components/WholeLectures/LectureCard/SkeletonCard";

interface CalculatedLectureItem {
  img: string;
  LectureId: number;
  thumbnail: string;
  lectureDescription: string;
  lectureTitle: string;
  targetAudience: string;
  rating: number;
  instructor: {
    username: string;
  };
}

const MyLecture: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery(["lecturex"], getAllLectures, {
    onSuccess(data) {
      console.log("all", data.data);
    },
  });
  if (isError) {
    navigate("/notfound");
  }
  useEffect(() => {
    if (isError) {
      navigate("/notfound");
    }
  }, [isError, navigate]);

  return (
    <div>
      <Grid>
        <GridItem mx="auto">
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap="5">
            {!isLoading
              ? data?.data?.map((lecture: CalculatedLectureItem) => (
                  <GridItem key={lecture.LectureId} mx="auto">
                    <MylectureCard
                      lectureNumber={lecture.LectureId}
                      img={lecture.thumbnail}
                      lectureDescription={lecture.lectureDescription}
                      lectureTitle={lecture.lectureTitle}
                      targetAudience={lecture.targetAudience}
                      instructor={lecture.instructor.username}
                      isInstructor={true}
                      // rating={lecture.rating}
                    />
                  </GridItem>
                ))
              : skeletonArray.map((_: number, idx: number) => (
                  <GridItem key={idx} mx="auto">
                    <SkeletonCard />
                  </GridItem>
                ))}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyLecture;
