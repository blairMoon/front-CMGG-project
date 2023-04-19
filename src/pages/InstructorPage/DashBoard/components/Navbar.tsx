// src/components/Navbar.tsx
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSistrix, FaBell } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
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
        <h1>Your DATA</h1>
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
