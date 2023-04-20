import { Box, VStack, Text, useColorMode } from "@chakra-ui/react";
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
        <Text fontSize="xl" fontWeight="bold">
          Issues
        </Text>
        {issues.map((issue) => (
          <Box key={issue.id} borderWidth="1px" borderRadius="lg" px="3" py="1">
            <Text fontWeight="bold">{issue.title}</Text>
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
