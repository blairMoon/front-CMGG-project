import React, { useState } from "react";
import {
  Text,
  Stack,
  HStack,
  Box,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Box>
        <Stack pt="12" fontSize="10px" fontWeight="600" spacing="4">
          <HStack spacing="10">
            <HStack w="100%" spacing="10">
              <Box
                _hover={{
                  transform: "scale(1.08)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <img src="/images/teaching.svg" alt="teaching" />
              </Box>
              <Box minW="160px">
                최신 프로그래밍 기술에 대한 과정을 가르치면서 자신의 기술을
                보여주고 개인 브랜드를 구축하십시오.
              </Box>
            </HStack>
            <HStack w="100%" spacing="10">
              <Box
                _hover={{
                  transform: "scale(1.08)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <img src="/images/education.svg" alt="education" />
              </Box>
              <Box minW="160px">
                프로그래밍에 대한 전문 지식과 열정을 공유하여 전 세계 학생들의
                삶을 변화시키십시오.
              </Box>
            </HStack>
          </HStack>
          <HStack spacing="10">
            <HStack w="100%" spacing="10">
              <Box
                _hover={{
                  transform: "scale(1.08)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <img src="/images/analyze.svg" alt="analyze" />
              </Box>
              <Box minW="160px">
                자신의 일정에 따라 작업하고 전 세계 어디에서나 온라인 교육의
                유연성을 즐기십시오.
              </Box>
            </HStack>
            <HStack w="100%" spacing="10">
              <Box
                _hover={{
                  transform: "scale(1.08)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <img src="/images/notebook.svg" alt="notebook" />
              </Box>
              <Box minW="160px">
                프로그래밍에 대한 열정을 전 세계와 공유하고 차세대 개발자에게
                영감을 주세요!
              </Box>
            </HStack>
          </HStack>

          <Box display="flex" justifyContent="flex-end">
            <Button
              border="2px solid #769dd6"
              bg="white"
              color="#769dd6"
              _hover={{ bg: "#4c7cc2", color: "white" }}
              borderRadius="lg"
              boxShadow="md"
              padding="20px"
              onClick={() => {
                // 여기에 넣으면 됨.
              }}
            >
              <Text pr="2" fontSize="16px" fontWeight="400">
                강사 신청하기
              </Text>
              <HiArrowRight size="14px" />
            </Button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;
