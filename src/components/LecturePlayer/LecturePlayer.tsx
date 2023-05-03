import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  Box,
  Stack,
  Flex,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Progress,
  Tooltip,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
// import LectureHeader from "../../components/LectureHeader/LectureHeader";
// import Notfound from "../Notfound/Notfound";
import {
  fetchVideoList,
  savePlayedSeconds,
  watchedlectures80,
  SavePlayedSecondsParams,
} from "../../services/api";
import { BsListUl } from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import VideoList from "../../components/LecturePlayer/VideoList/VideoList";
import { Spinner } from "@chakra-ui/react";

interface ProgressState {
  playedSeconds: number;
}

interface Video {
  id: number;
  title: string;
  description: string;
  videoLength: number;
  is_completed: boolean;
}

interface VideoListResponse {
  list: Video[];
  url: {
    videoFile: string;
    calculatedLecture: {
      lectureTitle: string;
    };
  };
  totalLength: number;
  lastPlayed: number;
}

const LecturePlayer: React.FC = () => {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [played80, setPlayed80] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const playerRef = useRef<ReactPlayer | null>(null);

  const { lectureId = "", num = "" } = useParams();

  const queryKey = ["videoList", lectureId, num];
  const {
    data: videoList,
    isLoading,
    isError,
  } = useQuery<VideoListResponse, Error>(
    queryKey,
    () => fetchVideoList({ lectureId, num }),
    {
      retry: false,
      staleTime: 0,
      cacheTime: 0,
      refetchOnMount: true,
    }
  ); // 로딩때 전 내용이 보이고 끔뻑이던 문제 해결

  if (isError) {
    navigate("/notlogin");
  }
  const handleDuration = (duration: number) => {
    // console.log('영상길이', duration);
  };

  const queryClient = useQueryClient();

  const savePlayedSecondsMutation = useMutation<
    unknown,
    Error,
    SavePlayedSecondsParams
  >(savePlayedSeconds, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const watchedlectures80Mutation = useCallback<any>(
    useMutation(watchedlectures80, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }),
    []
  );

  const handleProgress = (state: ProgressState) => {
    setPlayedSeconds(state.playedSeconds);
    const duration = playerRef.current?.getDuration();
    if (duration && state.playedSeconds >= duration * 0.8 && !isCompleted) {
      setIsCompleted(true);
      setPlayed80(true);
      watchedlectures80Mutation.mutate({
        lectureId,
        num,
        is_completed: true,
        lastPlayed: playedSeconds,
      });
      return;
    }
  };

  useEffect(() => {
    const fetchedPlayedSeconds = videoList?.lastPlayed;
    if (fetchedPlayedSeconds) {
      setPlayedSeconds(fetchedPlayedSeconds);
      playerRef.current?.seekTo(fetchedPlayedSeconds, "seconds");
    } else {
      setPlayedSeconds(0);
      playerRef.current?.seekTo(0, "seconds");
    }
  }, [videoList]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleSaveAndClose = async () => {
    try {
      await savePlayedSecondsMutation.mutateAsync({
        lectureId,
        num,
        lastPlayed: playedSeconds,
      });
      navigate("/mypage/lecture");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlayerReady = () => {
    const fetchedPlayedSeconds = videoList?.lastPlayed;

    if (fetchedPlayedSeconds && !loaded) {
      if (playerRef.current) {
        playerRef.current.seekTo(fetchedPlayedSeconds, "seconds");
      }
      setLoaded(true);
    }
    setPlaying(true);
  };

  useEffect(() => {
    if (isCompleted) {
      watchedlectures80Mutation.mutate({
        lectureId,
        num,
        is_completed: true,
        lastPlayed: playedSeconds,
      });
    }
  }, [isCompleted, watchedlectures80Mutation, lectureId, num]);

  const handleError = (e: Error) => {
    console.error("비디오 에러:", e);
  };

  const resetCompleted = () => {
    setIsCompleted(false);
    setPlayed80(false);
    setLoaded(false);
  };

  const completedCount = useMemo(() => {
    return videoList?.list.filter((item) => item.is_completed).length || 0;
  }, [videoList]);

  const progressPercent = useMemo(() => {
    if (videoList) {
      return Math.round((completedCount / videoList?.list.length) * 100);
    }
  }, [completedCount, videoList]);
  console.log(videoList);
  const handlePrevClick = () => {
    const prevNum = parseInt(num) - 1;
    if (prevNum > 0) {
      navigate(`/lectureplay/${lectureId}/${prevNum}`);
      resetCompleted();
    }
  };

  const handleNextClick = () => {
    const nextNum = parseInt(num) + 1;
    if (nextNum <= (videoList?.list.length ?? 0)) {
      navigate(`/lectureplay/${lectureId}/${nextNum}`);
      resetCompleted();
    }
  };

  const aspectRatio = 9 / 16;
  const maxWidth = 1280;
  const maxHeight = maxWidth * aspectRatio;

  return (
    <div>
      {isLoading && (
        <div>
          <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner />
          </Flex>
        </div>
      )}
      {videoList && (
        <div>
          <Flex justifyContent="space-between" pl="10" pr="1">
            <Box pl="7">
              <Box fontSize="20px">
                {videoList.url.calculatedLecture.lectureTitle}
              </Box>
              <Box fontWeight="600" pt="2" width="800px">
                #{videoList?.list[parseInt(num) - 1].title.slice(0, -1)}.&nbsp;
                {videoList?.list[parseInt(num) - 1].description}
              </Box>
            </Box>

            <Tooltip label="목차 열기" fontSize="md">
              <Button
                ref={btnRef}
                colorScheme="ghost"
                onClick={() => setIsDrawerOpen(true)}
                // bg="#f0f0f2"
                p="1"
              >
                <BsListUl size={40} style={{ color: "black" }} />
              </Button>
            </Tooltip>
          </Flex>
          <Flex w="50%" h="100%" margin="auto" pt="10">
            <Box
              width="100%"
              height="100%"
              maxWidth={`${maxWidth}px`}
              position="relative"
              paddingTop={`calc(100% * ${aspectRatio})`}
              maxHeight={`${maxHeight}px`}
              margin="auto"
              overflow="hidden"
            >
              <ReactPlayer
                className="react-player"
                style={{ position: "absolute", top: 0, left: 0 }}
                width="100%"
                height="100%"
                url={videoList.url.videoFile}
                playing={playing}
                muted={true}
                loop={false}
                controls={true}
                light={false}
                pip={true}
                played={[videoList?.lastPlayed || 0, undefined]}
                onProgress={handleProgress}
                onDuration={handleDuration}
                ref={playerRef}
                onReady={handlePlayerReady}
                onError={handleError}
                config={{
                  youtube: {
                    playerVars: {
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
          </Flex>
          <Flex justifyContent="center" w="100%" pt="5">
            <Box
              display="flex"
              justifyContent="space-between"
              w="100%"
              maxWidth="300px"
            >
              <Box>
                <Button
                  bg="#003C93"
                  color="white"
                  _hover={{ bg: "#012a66" }}
                  _active={{ bg: "#012a66" }}
                  borderRadius="3xl"
                  boxShadow="lg"
                  onClick={() => handlePrevClick()}
                >
                  <FaArrowCircleLeft size="20" />{" "}
                  <Text pl="2" fontSize="14px">
                    이전
                  </Text>
                </Button>
              </Box>
              <Box>
                <Button
                  bg="#003C93"
                  color="white"
                  _hover={{ bg: "#012a66" }}
                  _active={{ bg: "#012a66" }}
                  borderRadius="3xl"
                  boxShadow="lg"
                  onClick={() => handleNextClick()}
                >
                  <Text pr="2" fontSize="14px">
                    다음
                  </Text>
                  <FaArrowCircleRight size="20" />
                </Button>
              </Box>
            </Box>
          </Flex>

          <Drawer
            isOpen={isDrawerOpen}
            placement="right"
            onClose={() => setIsDrawerOpen(false)}
            finalFocusRef={btnRef}
            blockScrollOnMount={false}
          >
            <DrawerContent>
              <Tooltip label="목차 닫기" fontSize="md">
                <DrawerCloseButton tabIndex={-1} />
              </Tooltip>
              <DrawerHeader>
                <Box fontSize="22">목차</Box>
                <Box px="1" py="2">
                  <Box fontSize="16">
                    {videoList.url.calculatedLecture.lectureTitle}
                  </Box>
                  <Box
                    fontSize="14"
                    color={colorMode === "light" ? "#525252" : "#bfbdbd"}
                    paddingTop="2"
                  >
                    수강 기한 : 무제한
                  </Box>
                  <Box
                    fontSize="14"
                    color={colorMode === "light" ? "#525252" : "#bfbdbd"}
                    paddingBottom="5"
                  >
                    진도율 : {completedCount}강/{videoList.list.length}강 (
                    {progressPercent}%)
                  </Box>
                </Box>
                <Box px="1">
                  <Progress
                    value={progressPercent}
                    size="xs"
                    rounded="lg"
                    bg="#dedede"
                    sx={{
                      "& div": {
                        backgroundColor: "#003C93",
                      },
                    }}
                  />
                </Box>
              </DrawerHeader>

              <DrawerBody width="100%" fontWeight="600">
                <Stack spacing={3}>
                  {isLoading ? (
                    <Flex justifyContent="center">
                      <Spinner />
                    </Flex>
                  ) : (
                    videoList.list?.map((video: Video, index: number) => (
                      <VideoList
                        index={index + 1}
                        key={video.id}
                        videoTitle={video.title}
                        videoLength={video.videoLength}
                        lectureId={lectureId}
                        numColor={
                          index + 1 === parseInt(num) ? "#dfe8f5" : "#f2f3f5"
                        }
                        buttonColor={
                          video.is_completed
                            ? "#003C93" //true인 경우: 버튼 색상을 pink로 변경, false인 경우에는 다음 아래의 조건을 확인
                            : index + 1 === parseInt(num) && played80
                            ? "#003C93"
                            : "#b8b8b8"
                        }
                        resetCompleted={resetCompleted}
                      />
                    ))
                  )}
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Button
                  bg="#003C93"
                  color="white"
                  _hover={{ bg: "#012a66" }}
                  _active={{ bg: "#012a66" }}
                  borderRadius="lg"
                  boxShadow="lg"
                  onClick={handleSaveAndClose}
                  tabIndex={-1}
                >
                  저장 후 닫기
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default LecturePlayer;
