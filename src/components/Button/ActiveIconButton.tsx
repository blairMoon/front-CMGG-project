import {
  IconButton,
  IconButtonProps,
  Flex,
  Tooltip,
  Text,
} from "@chakra-ui/react";

interface ActiveIconButtonProps extends IconButtonProps {
  testId: string;
  isActive?: boolean;
  activeColor?: string;
  activeBgColor?: string;
}

export const ActiveIconButton: React.FC<ActiveIconButtonProps> = ({
  testId,
  isActive,
  activeColor,
  activeBgColor,
  ...props
}) => {
  console.log({ ...props });
  return (
    <div data-testid={testId} style={{ width: "auto", position: "relative" }}>
      {isActive && (
        <Flex
          pos={"absolute"}
          bgColor={activeBgColor}
          borderRadius={4}
          p="1"
          py="0.5"
          right="3.5"
          top="1"
          zIndex="2"
          w="12px"
          h="13px"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="7px" color={activeColor}>
            N
          </Text>
        </Flex>
      )}
      <Tooltip label={isActive ? "새로운 데이터가 있습니다!" : ""}>
        <IconButton {...props} />
      </Tooltip>
    </div>
  );
};
