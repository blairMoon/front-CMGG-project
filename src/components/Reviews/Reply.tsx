import React from "react";

import { Stack, Box } from "@chakra-ui/react";

interface ReplyProps {
  username: string;
  content: string;
  created_at: string;
}

const Reply: React.FC<ReplyProps> = ({ username, content, created_at }) => {
  return (
    <Stack py="3">
      <Stack bg="rgba(238,238,238,0.4)" px="5" py="5">
        <Box fontWeight="700" color="#958E96">
          {username}
        </Box>
        <Box py="3">{content}</Box>
        <Box color="#A6A6A6" fontWeight="600">
          {created_at}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Reply;
