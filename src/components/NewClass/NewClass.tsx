import React from "react";
import css from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllLectures } from "../../services/api";
import { SiSpring } from "react-icons/si";
import LectureCard from "../../components/WholeLectures/LectureCard/LectureCard";
import { ILectureData } from "../../../typings/LectureData";
// import StarRating from "../../components/LectureCard/StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Flex,
  Link,
  Button,
  Heading,
  Text,
  Box,
  Image,
  Container,
  Stack,
  SimpleGrid,
  CardBody,
  Card,
  VStack,
  HStack,
  GridItem,
} from "@chakra-ui/react";

import { skeletonArray } from "../../constant";
import SkeletonCard from "../WholeLectures/LectureCard/SkeletonCard";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NewLecture() {
  const { isLoading, data } = useQuery(["lectureInfo"], () => getAllLectures());

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div>
      {!isLoading ? (
        <Container as="section" maxW={"6xl"}>
          <Slider {...sliderSettings}>
            {data?.data?.map((lecture: ILectureData) => (
              <GridItem key={lecture.LectureId} ml="20px">
                <LectureCard data={lecture} />
              </GridItem>
            ))}
          </Slider>
        </Container>
      ) : (
        <Container as="section" maxW={"6xl"}>
          <Slider {...sliderSettings}>
            {skeletonArray.map((_: number, idx: number) => (
              <GridItem key={idx} ml="20px">
                <SkeletonCard />
              </GridItem>
            ))}
          </Slider>
        </Container>
      )}
    </div>
  );
}

export default NewLecture;
