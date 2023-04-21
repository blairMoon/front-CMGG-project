// src/components/Navbar.tsx
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaSistrix, FaBell } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      padding="1.5rem"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      {/* 로고 및 프로젝트 이름 */}
      <Box>
        <Text fontSize="2xl" fontWeight={600}>
          Your Data
        </Text>
      </Box>

      {/* 검색, 알림 및 테마 변경 버튼 */}
      <Flex alignItems="center">
        <IconButton icon={<RepeatIcon />} mx={3} aria-label="refresh" />
        <IconButton icon={<FaBell />} aria-label="Notifications" />
        <Spacer />
      </Flex>
    </Flex>
  );
};

export default Navbar;
