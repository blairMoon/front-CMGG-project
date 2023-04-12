import React from "react";
import LectureCard from "./LectureCard/LectureCard";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
<<<<<<< HEAD
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import {}
=======

>>>>>>> 72651fe888c07c46a32420027cd600f84bb2071d
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
<<<<<<< HEAD
  // const {
  //   isLoading: isSearching,
  //   data,
  //   refetch: refetchSearch,
  // } = useQuery(
  //   ["lectureSearch", bigCategory, smallCategory, pageNum, searchName],
  //   getLectureAndCategoryAndSearch
  // );
=======

>>>>>>> 72651fe888c07c46a32420027cd600f84bb2071d
  return (
    <>
      <div>WholeLecturePage</div>
      <LectureCard />
    </>
  );
};

export default WholeLecturePage;
