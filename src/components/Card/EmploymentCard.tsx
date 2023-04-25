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
  Image,
} from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmploymentCard: React.FC = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <div>
      <Stack>
        <HStack pb="4">
          <Box
            fontWeight="600"
            style={{ color: colorMode === "light" ? "#3d3d3d" : " white" }}
            fontSize="18px"
          >
            추천 채용
          </Box>
        </HStack>
        <Stack>
          <Image
            h="130px"
            w="100%"
            src="https://cdn.rallit.com/image/2022-03-11/We9qIwQZgp8a-ga-UW0W6.JPG?w=720"
            objectFit="contain"
          />
        </Stack>
        <Box fontSize="12px">
          <Text>에이피알</Text>
          <Text fontSize="14px" fontWeight="600">
            주니어 프론트 개발자(React)
          </Text>
          <Text color="#858585">Redux MobX HTML/CSS</Text>
          <Text color="#858585">주니어(1~3년) | 강남</Text>
        </Box>
        <HStack justifyContent="flex-end">
          <HStack spacing="0" pr="1">
            <Box>1</Box>
            <Box color="#858585">/10</Box>
          </HStack>
          <Button
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
      </Stack>
    </div>
  );
};

export default EmploymentCard;
