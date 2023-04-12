import React from "react";
import LectureCard from "../WholeLectures/LectureCard/LectureCard";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLectureAndCategoryAndSearch } from "../../services/api";
import Cookies from "js-cookie";

interface Props {}

const WholeLectures: React.FC<Props> = () => {
  const { bigCategory, smallCategory } = useParams<{
    bigCategory: string;
    smallCategory: string;
  }>();
  // const bi;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageNum = params.get("page");
  const searchName = params.get("search");
  const {
    isLoading: isSearching,
    data,
    refetch: refetchSearch,
  } = useQuery(
    [
      "lectureSearch",
      {
        bigCategory,
        smallCategory,
        pageNum: Number(pageNum),
        searchName,
      },
    ],
    getLectureAndCategoryAndSearch,
    {
      onSuccess(data) {
        console.log("data", data);
      },
    }
  );
  return (
    <>
      <LectureCard />
    </>
  );
};

export default WholeLectures;
