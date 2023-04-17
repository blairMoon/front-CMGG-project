import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, HStack, Stack, Divider, Avatar } from "@chakra-ui/react";

import { FiSettings } from "react-icons/fi";

import { RiHomeHeartLine } from "react-icons/ri";
import { BsPlayCircle, BsFileEarmarkText } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";

const MySideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <div>
      <Stack w="100%" fontWeight="600">
        <HStack px="5" py="2" fontSize="18px">
          <Box>마이 페이지</Box>
        </HStack>
        <Divider />
        <HStack px="5" py="2">
          <Box>대시보드</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: "lg",
            color: "white",
            bg: "#769dd6",
          }}
          onClick={() => {
            navigate("");
          }}
          borderRadius={lastSegment === "mypage" ? "lg" : undefined}
          color={lastSegment === "mypage" ? "white" : undefined}
          bg={lastSegment === "mypage" ? "#769dd6" : undefined}
        >
          <BsFileEarmarkText />
          <Box>학습 관리</Box>
        </HStack>

        <Divider />
        <HStack px="5" py="2">
          <Box>수강 강의</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: "lg",
            color: "white",
            bg: "#769dd6",
          }}
          onClick={() => {
            navigate("/mypage/lecture");
          }}
          borderRadius={lastSegment === "lecture" ? "lg" : undefined}
          color={lastSegment === "lecture" ? "white" : undefined}
          bg={lastSegment === "lecture" ? "#769dd6" : undefined}
        >
          {" "}
          <BsPlayCircle />
          <Box>수강중인 강의</Box>
        </HStack>

        <Divider />
        <HStack px="5" py="2">
          <Box>수강신청 관리</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: "lg",
            color: "white",
            bg: "#769dd6",
          }}
          onClick={() => {
            navigate("/mypage/payment");
          }}
          borderRadius={lastSegment === "payment" ? "lg" : undefined}
          color={lastSegment === "payment" ? "white" : undefined}
          bg={lastSegment === "payment" ? "#769dd6" : undefined}
        >
          <MdPayment />
          <Box>결제 내역</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: "lg",
            color: "white",
            bg: "#769dd6",
          }}
          onClick={() => {
            navigate("/mypage/cart");
          }}
          borderRadius={lastSegment === "cart" ? "lg" : undefined}
          color={lastSegment === "cart" ? "white" : undefined}
          bg={lastSegment === "cart" ? "#769dd6" : undefined}
        >
          <AiOutlineShoppingCart />
          <Box>수강바구니</Box>
        </HStack>
        <Divider />
        <HStack px="5" py="2">
          <Box>회원정보 수정</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: "lg",
            color: "white",
            bg: "#769dd6",
          }}
          onClick={() => {
            navigate("/mypage/editMember");
          }}
          borderRadius={lastSegment === "editMember" ? "lg" : undefined}
          color={lastSegment === "editMember" ? "white" : undefined}
          bg={lastSegment === "editMember" ? "#769dd6" : undefined}
        >
          <FiSettings />
          <Box>정보 수정</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: "lg",
            color: "white",
            bg: "#769dd6",
          }}
          onClick={() => {
            navigate("/mypage/delete");
          }}
        >
          <CgDanger size={16} />
          <Box>회원 탈퇴</Box>
        </HStack>
        <HStack pt="20">
          <Box>
            <Avatar bg="#CED4DA" icon={<RiHomeHeartLine size={35} />} />
          </Box>
          <Stack pl="2" spacing={0}>
            <Box fontSize="16">blairMoon</Box>
            <Box fontSize="14" color="#707070">
              Student
            </Box>
          </Stack>
        </HStack>
      </Stack>
    </div>
  );
};

export default MySideBar;
