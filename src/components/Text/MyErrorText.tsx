import { Text } from "@chakra-ui/react";

interface Props {
  message: string;
}

export function MyErrorText({ message }: Props) {
  return (
    <Text color={"#e53e3e"} fontSize="13.5px" fontWeight="400" mt="1" mb="2">
      {message}
    </Text>
  );
}
