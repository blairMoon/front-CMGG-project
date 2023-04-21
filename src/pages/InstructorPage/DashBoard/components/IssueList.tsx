import { Box, VStack, Text, useColorMode, HStack } from "@chakra-ui/react";
interface Issue {
  id: number;
  title: string;
  description: string;
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="1rem"
      h="400px"
      overflowY="scroll"
    >
      <VStack spacing={3} align="stretch">
        <HStack alignItems={"flex-end"} spacing={7}>
          <Text fontSize="xl" fontWeight="bold">
            Issues
          </Text>
          <Text
            fontSize="10px"
            fontWeight="bold"
            color={colorMode === "light" ? "gray.500" : "gray.400"}
          >
            최근 기록 20개만 보입니다!
          </Text>
        </HStack>
        {issues.map((issue) => (
          <Box key={issue.id} borderWidth="1px" borderRadius="lg" px="3" py="1">
            <HStack>
              <Text fontWeight="bold">{issue.title}</Text>
              <Text
                fontSize={11}
                color={colorMode === "light" ? "gray.500" : "gray.400"}
              >
                2023-04-20
              </Text>
            </HStack>
            <Text
              pl="2"
              fontSize="sm"
              color={colorMode === "light" ? "gray.500" : "gray.400"}
            >
              {issue.description}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default IssueList;
