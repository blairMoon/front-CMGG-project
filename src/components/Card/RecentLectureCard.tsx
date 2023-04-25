import React from "react";
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
} from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const RecentLectureCard: React.FC = () => {
  const navigate = useNavigate();
  const lectureTitle =
    "지브러시 세계로 떠나는 여행자 가이드 (Zbrush) 대시보드지브러시 세계로 떠나는 여행자 가이드 (Zbrush) 대시보드";

  const MAX_LENGTH = 40;
  let text = lectureTitle;

  if (text.length > MAX_LENGTH) {
    text = text.slice(0, MAX_LENGTH) + "...";
  }
  return (
    <div>
      <HStack justifyContent="space-between" alignItems="flex-end">
        <Box fontWeight="600" color="#3d3d3d" fontSize="18px">
          최근학습강의
        </Box>
        <Box
          display="flex"
          cursor="pointer"
          alignItems="center"
          _hover={{
            textDecoration: "underline",
          }}
          onClick={() => {
            navigate("/mypage/lecture");
          }}
          fontSize="14px"
          fontWeight="600"
          color="#a6a6a6"
        >
          <Box>전체 보기</Box>
          <Box>
            <HiOutlineChevronRight />
          </Box>
        </Box>
      </HStack>
      <Box width="100%">{text}</Box>
      <HStack justifyContent="space-between" fontSize="12px">
        <Box>진도율: 14/18강 (77.78%)</Box>
        <Box color="#bababa" fontWeight="600">
          2달 전
        </Box>
      </HStack>
      <Box pb="5">
        <Progress
          value={77.78}
          size="sm"
          rounded="lg"
          bg="#dedede"
          sx={{
            "& div": {
              backgroundColor: "#003C93",
            },
          }}
        />
      </Box>
      <Stack>
        <Button
          bg="#003C93"
          color="white"
          _hover={{ bg: "#012a66" }}
          _active={{ bg: "#012a66" }}
          borderRadius="lg"
          boxShadow="lg"
        >
          바로 학습
        </Button>
      </Stack>
    </div>
  );
};

export default RecentLectureCard;
