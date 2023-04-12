import React from "react";
import LectureCard from "../../components/WholeLectures/LectureCard/LectureCard";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import WholeLectures from "../../components/WholeLectures/WholeLectures";
// import {}
interface Props {}

const WholeLecturePage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div>WholeLecturePage</div>
      <WholeLectures />
    </>
  );
};

export default WholeLecturePage;
