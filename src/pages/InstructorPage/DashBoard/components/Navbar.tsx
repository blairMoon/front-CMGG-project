// src/components/Navbar.tsx
import { Box, Flex, Spacer, IconButton } from "@chakra-ui/react";
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
        <h1>Sentry Clone</h1>
      </Box>

      {/* 검색, 알림 및 테마 변경 버튼 */}
      <Flex alignItems="center">
        <IconButton
          icon={<FaSistrix />}
          aria-label="Search"
          marginRight="1rem"
        />
        <IconButton icon={<FaBell />} aria-label="Notifications" />
        <Spacer />
      </Flex>
    </Flex>
  );
};

export default Navbar;
