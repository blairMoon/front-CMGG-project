import { Box, VStack, Text } from "@chakra-ui/react";
interface Issue {
  id: number;
  title: string;
  description: string;
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="1rem">
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Issues
        </Text>
        {issues.map((issue) => (
          <Box
            key={issue.id}
            borderWidth="1px"
            borderRadius="lg"
            padding="1rem"
          >
            <Text fontWeight="bold">{issue.title}</Text>
            <Text fontSize="sm" color="gray.500">
              {issue.description}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default IssueList;
