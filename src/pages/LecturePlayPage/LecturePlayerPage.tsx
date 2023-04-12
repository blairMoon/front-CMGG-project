import React, { useState, useEffect, useRef } from "react";
import { Box, VStack, Flex } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const Video = () => {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayerReady = () => {
    if (playedSeconds > 0) {
      playerRef.current?.seekTo(
        parseFloat(playedSeconds.toString()),
        "seconds"
      );
    }
  };

  const handleDuration = (duration: number) => {
    console.log(duration); // logs the video duration in seconds
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    const now = new Date().getTime();
    const data = {
      playedSeconds: state.playedSeconds,
      lastPlayed: now,
    };
    localStorage.setItem("videoData", JSON.stringify(data));
    setPlayedSeconds(state.playedSeconds);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("videoData");
    if (savedData) {
      const { playedSeconds, lastPlayed } = JSON.parse(savedData);
      const now = new Date().getTime();
      const timeDiff = now - lastPlayed;
      if (timeDiff < 86400000) {
        setPlayedSeconds(parseFloat(playedSeconds));
        playerRef.current?.seekTo(parseFloat(playedSeconds), "seconds");
      }
    }
  }, []);

  return (
    <div>
      <Flex direction="column" align="center" h="100%">
        <VStack align="center">
          <Box>
            <ReactPlayer
              className="react-player"
              url={"https://https://youtu.be/RqSXYtfMwL0.com/2fm3bmwp"}
              width={1280} // 플레이어 크기 (가로)
              height={720} // 플레이어 크기 (세로)
              playing={true} // 자동 재생 on
              muted={true} // 자동 재생 on
              loop={false} // 무한 반복 여부
              controls={true} // 플레이어 컨트롤 노출 여부
              ref={playerRef}
              light={false} // 플레이어 모드
              pip={true} // pip 모드 설정 여부
              played={playedSeconds}
              onProgress={handleProgress}
              onReady={handlePlayerReady}
              onDuration={handleDuration} //영상길이
              config={{
                youtube: {
                  playerVars: {
                    origin: window.location.origin,
                  },
                },
              }}
            />
          </Box>
        </VStack>
      </Flex>
    </div>
  );
};

export default Video;
