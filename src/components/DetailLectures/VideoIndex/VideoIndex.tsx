import React from "react";

import { HStack, Box } from "@chakra-ui/react";
import { BsFillPlayCircleFill } from "react-icons/bs";

interface Props {
  videoLength: number;
  videoTitle: string;
}

const VideoList: React.FC<Props> = ({ videoLength, videoTitle }) => {
  const minutes = Math.floor(videoLength / 60); // 분
  const seconds = videoLength % 60; // 초

  const displayTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`; // 1:05와 같은 형태로 표시

  return (
    <div>
      <HStack w="100%" justify="center">
        <HStack
          w="750px"
          justify="space-between"
          border="1px solid #DCDCDC"
          rounded="5"
          p="5"
          bg="rgba(238,238,238,0.3)"
          my="1"
          fontWeight="bold"
          color="#575757"
        >
          <HStack>
            <Box>
              <BsFillPlayCircleFill style={{ color: "#969696" }} />
            </Box>
            <Box>{videoTitle}</Box>
          </HStack>
          <Box>{displayTime}</Box>
        </HStack>
      </HStack>
    </div>
  );
};

export default VideoList;
