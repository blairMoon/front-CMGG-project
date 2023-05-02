import React, { useState } from "react";
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
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmploymentCard: React.FC = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 9 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 9 ? 0 : prevIndex + 1));
  };

  interface EmployData {
    thumbnail: string;
    title: string;
    rank: string;
    stack: string;
    career: string;
    place: string;
  }
  const EmployMockData: EmployData[] = [
    {
      thumbnail: "/images/employ/manpower.jpg",
      title: "맨파워그룹코리아",
      rank: "데이터 사이언티스트",
      stack: "Pyhon R Azure Bootstrap",
      career: "경력무관",
      place: "경기",
    },
    {
      thumbnail: "/images/employ/shinhan.jpg",
      title: "신한카드",
      rank: "프론트엔드 SPA 리드개발자",
      stack: "SPA HTML/CSS JavaScript UX/UI",
      career: "미들(4~8년)",
      place: "서울",
    },
    {
      thumbnail: "/images/employ/apr.png",
      title: "에이피알",
      rank: "주니어 프론트엔드 개발자(React)",
      stack: "Redux MobX HTML/CSS",
      career: "주니어(1~3년)",
      place: "강남",
    },
    {
      thumbnail: "/images/employ/hc.jpg",
      title: "주식회사 에이치임씨네트웍스",
      rank: "프론트엔드 개발자",
      stack: "React JavaScript HTML/CSS",
      career: "미들(4~8년)",
      place: "강남",
    },
    {
      thumbnail: "/images/employ/isu.jpg",
      title: "이수시스템",
      rank: "인사솔루션 개발자",
      stack: "Java JavaScript Oracle JSP Spring",
      career: "미들(4~8년)",
      place: "강남",
    },
    {
      thumbnail: "/images/employ/olim.jpeg",
      title: "올림플래닛",
      rank: "백엔드 개발",
      stack: "GO AWS Kuberetes Docker Spring",
      career: "미들(4~8년)",
      place: "서울",
    },
    {
      thumbnail: "/images/employ/gameduo.png",
      title: "주식회사 게임듀오",
      rank: "유니티 클라이언트",
      stack: "Unity C#",
      career: "주니어(1~3년)",
      place: "마포",
    },
    {
      thumbnail: "/images/employ/birdview.jpg",
      title: "화해(버드뷰)",
      rank: "QA Engineer",
      stack: "Selenium SonarQube",
      career: "주니어(1~3년)",
      place: "강남",
    },
    {
      thumbnail: "/images/employ/theragen.jpg",
      title: "(주)테라젠바이오",
      rank: "테라젠바이오 웹개발자",
      stack: "Spring Boot React Docker Kubernetes",
      career: "주니어(1~3년)",
      place: "서울",
    },
    {
      thumbnail: "/images/employ/soomgo.jpg",
      title: "브레이브모바일 (숨고)",
      rank: "Mobile Chapter Lead",
      stack: "React ReactNative TypeScript",
      career: "주니어(1~3년)",
      place: "서울",
    },
  ];

  return (
    <div>
      {/* <Image
        src="/images/CGLOGO.png"
      /> */}
      <Stack>
        <HStack pb="4">
          <Box
            fontWeight="600"
            style={{ color: colorMode === "light" ? "#3d3d3d" : " white" }}
            fontSize="18px"
          >
            추천 채용
          </Box>
          <Tooltip
            hasArrow
            label="수강한 강의 기반으로 추천드려요!"
            placement="top"
            fontSize="12px"
            bg="#2f2f30"
            color="white"
            p="8px 12px"
            borderRadius="lg"
          >
            <Box color="#858585">
              <BsQuestionCircle />
            </Box>
          </Tooltip>
        </HStack>
        <Stack>
          <Image
            h="160px"
            w="100%"
            src={EmployMockData[currentIndex].thumbnail}
            objectFit="cover"
          />
        </Stack>
        <Box fontSize="12px">
          <Text>{EmployMockData[currentIndex].title}</Text>
          <Text fontSize="14px" fontWeight="600" noOfLines={1}>
            {EmployMockData[currentIndex].rank}
          </Text>
          <HStack justifyContent="space-between" alignItems="flex-end">
            <Stack spacing="0">
              <Text noOfLines={1} color="#858585">
                {EmployMockData[currentIndex].stack}
              </Text>
              <Text color="#858585">
                {EmployMockData[currentIndex].career} |{" "}
                {EmployMockData[currentIndex].place}
              </Text>
            </Stack>
            <HStack justifyContent="flex-end">
              <HStack spacing="0" pr="1" fontSize="14px">
                <Box>{currentIndex + 1}</Box>
                <Box color="#858585">/10</Box>
              </HStack>
              <Button
                onClick={handlePrev}
                size="xs"
                rounded="full"
                bg="white"
                color="#858585"
                px="0"
                style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)" }}
              >
                <FaChevronLeft size="12px" />
              </Button>
              <Button
                onClick={handleNext}
                size="xs"
                rounded="full"
                bg="white"
                color="#858585"
                px="0"
                style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)" }}
              >
                <FaChevronRight size="12px" />
              </Button>
            </HStack>
          </HStack>
        </Box>
      </Stack>
    </div>
  );
};

export default EmploymentCard;
