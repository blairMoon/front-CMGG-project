import {
  Card,
  CardBody,
  Skeleton,
  HStack,
  Box,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";

const SkeletonRecommend: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Card
      width="280px"
      height="300px"
      direction={{ base: "column" }}
      variant="outline"
      _hover={{ background: "rgba(0, 0, 0, 0.4 )", zIndex: 10 }}
      overflow="hidden"
    >
      <HStack pb="4">
        <Box
          fontWeight="600"
          style={{ color: colorMode === "light" ? "#3d3d3d" : " white" }}
          fontSize="18px"
        >
          추천 강의
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
      <Skeleton
        objectFit="cover"
        maxW={{ base: "100%", sm: "100%" }}
        minH="160px"
        maxH="160px"
      />
      <CardBody px="1" py="4">
        <Skeleton h="30px" py="2" />
        <Skeleton h="15px" w="35%" mt="3" />
        <Skeleton h="15px" w="40%" mt="2" />
        <Skeleton h="15px" w="40%" mt="2" />
      </CardBody>
    </Card>
  );
};

export default SkeletonRecommend;
