import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Cookies from "js-cookie";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getLectureDetail } from "../../services/api";
// import ModalConfirm from "../../components/Modal/ModalConfirm";
// import StarRating from "../../components/LectureCard/StarRating";
// import Review from "../../components/Reviews/Review";
// import ReviewForm from "../../components/Reviews/ReviewForm";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { BsShare } from "react-icons/bs";
import { RiHomeHeartLine } from "react-icons/ri";
import {
  Grid,
  GridItem,
  HStack,
  Box,
  Image,
  Stack,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ModalLecture from "../../components/Modal/ModalLecture";
// import StartButton from "../../components/Button/StartButton";
import { useNavigate } from "react-router-dom";
// import VideoList from "../../components/List/VideoList";

interface Props {}

interface Instructor {
  username: string;
  instructorField: string | null;
  instructorAbout: string;
  instructorCareer: string;
}

interface Category {
  name: string;
  classification: string;
  parent: Category | null;
}

interface Review {
  id: number;
  reply: Review[];
  user: {
    username: string;
  };
  created_at: string;
  updated_at: string;
  rating: number;
  content: string;
}

interface LectureData {
  LectureId: number;
  lectureTitle: string;
  lectureDifficulty: string;
  lectureDescription: string;
  targetAudience: string;
  lectureFee: number;
  thumbnail: string;
  isOpened: boolean;
  grade: number | null;
  instructor: Instructor;
  categories: Category;
  reviews: Review[];
  reviews_num: number;
  rating: number;
  total_student: number;
}

interface VideoData {
  id: number;
  title: string;
  description: string;
  videoLength: number;
}

const DetailPage: React.FC<Props> = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  // const [registerLectureClick, setRegisterLectureClick] = useState(false);
  // const [loginCheck, setLoginCheck] = useState(true);
  const navigate = useNavigate();
  const [lectureData, setLectureData] = useState(null);
  const { isLoading, error, data, isError } = useQuery(
    ["lectureInfo", id],
    () => getLectureDetail(Number(id)),
    {
      retry: false,
    }
  );

  const queryClient = useQueryClient();
  // const { mutate } = useMutation(registerLecture, {
  //   onMutate: (d) => console.log("mutate", d),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["lectureInfo"]);
  //     navigate("/userinfo");
  //   },
  // });

  return <div>{data?.lecture_data.lectureTitle}</div>;
};

export default DetailPage;
