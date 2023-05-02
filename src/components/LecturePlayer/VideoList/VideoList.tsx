import React from "react";

import { Box, HStack, useColorMode } from "@chakra-ui/react";

import { BsCheckCircleFill, BsFillPlayCircleFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

interface VideoListProps {
  index: number;
  videoTitle: string;
  videoLength: number;
  lectureId: string;
  numColor: string;
  buttonColor: string;
  resetCompleted: () => void;
}

const VideoList: React.FC<VideoListProps> = ({
  index,
  videoTitle,
  videoLength,
  lectureId,
  numColor,
  buttonColor,
  resetCompleted,
}) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const minutes = Math.floor(videoLength / 60); // 분
  const seconds = videoLength % 60; // 초

  const displayTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // 1:05와 같은 형태로 표시

  return (
    <div>
      <HStack
        boxShadow="base"
        p="2"
        borderRadius="lg"
        bg={numColor}
        color={colorMode === "light" ? "#383838" : "#383838"}
        _hover={{ cursor: "pointer", background: "#dfe8f5" }}
        onClick={() => {
          navigate(`/lectureplay/${lectureId}/${index}`);
          resetCompleted();
        }}
      >
        <Box paddingLeft="1">
          <BsCheckCircleFill
            size={30}
            color={buttonColor} // played80 값에 따라 색상 변경
          />
        </Box>
        <Box>
          <Box fontSize="14">{videoTitle}</Box>
          <Box display="flex" alignItems="center" fontSize="12">
            <BsFillPlayCircleFill style={{ color: "#969696" }} />
            <Box pl="1">{displayTime}</Box>
          </Box>
        </Box>
      </HStack>
    </div>
  );
};

export default VideoList;
