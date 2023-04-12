import React from "react";

import LectureCard from "../../components/WholeLectures/LectureCard/LectureCard";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import WholeLectures from "../../components/WholeLectures/WholeLectures";
// import {}

interface Props {}

const WholeLecturePage: React.FC<Props> = (props: Props) => {
  type RouteParams = {
    bigCategory: string;
    smallCategory: string;
  };
  const { bigCategory, smallCategory } = useParams<RouteParams>();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageNum = params.get("page");
  const searchName = params.get("search");
  // const {
  //   isLoading: isSearching,
  //   data,
  //   refetch: refetchSearch,
  // } = useQuery(
  //   ["lectureSearch", bigCategory, smallCategory, pageNum, searchName],
  //   getLectureAndCategoryAndSearch
  // );

  return (
    <>
      <div>WholeLecturePage</div>
      <WholeLectures />
    </>
  );
};

export default WholeLecturePage;
