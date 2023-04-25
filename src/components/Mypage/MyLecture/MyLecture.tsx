import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MylectureCard from "../MyLectureCard/MyLectureCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLectureInfo } from "../../../services/api";

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
    navigate("/notfound");
    console.log("hello");
  }
  useEffect(() => {
    if (isError) {
      navigate("/notfound");
    }
  }, [isError, navigate]);

  // console.log(data.calculatedLecture);
  return (
    <div>
      <Grid>
        <GridItem mx="auto">
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap="5">
            {data?.calculatedLecture?.map((item: CalculatedLectureItem) => (
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
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyLecture;
