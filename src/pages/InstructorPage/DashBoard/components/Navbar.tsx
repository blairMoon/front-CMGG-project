import { FaBell } from "react-icons/fa";
import { RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { QueryObserverResult } from "@tanstack/react-query";

import { ActiveIconButton } from "../../../../components/Button/ActiveIconButton";

interface Props {
  refetch: () => Promise<QueryObserverResult<unknown, unknown>>;
}

const Navbar: React.FC<Props> = ({ refetch }: Props) => {
  const isActive = true;

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      padding="1.5rem"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box>
        <Text fontSize="2xl" fontWeight={600}>
          Your Data
        </Text>
      </Box>
      <Flex alignItems="center">
        <Tooltip label="Refetch">
          <IconButton
            onClick={refetch}
            icon={<RepeatIcon />}
            mx={1}
            aria-label="refresh"
          />
        </Tooltip>
        <ActiveIconButton
          icon={<FaBell />}
          mx={3}
          aria-label="Notifications"
          testId="notiBtn"
          activeColor={useColorModeValue("rgb(255,70,40)", "yellow")}
          isActive={isActive}
        />
        <Spacer />
      </Flex>
    </Flex>
  );
};

export default Navbar;
