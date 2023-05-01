import { IconButton, IconButtonProps, Circle } from "@chakra-ui/react";

interface ActiveIconButtonProps extends IconButtonProps {
  testId: string;
  isActive?: boolean;
  activeColor?: string;
}

export const ActiveIconButton: React.FC<ActiveIconButtonProps> = ({
  testId,
  isActive,
  activeColor,
  ...props
}) => {
  console.log({ ...props });
  return (
    <div data-testid={testId} style={{ width: "auto", position: "relative" }}>
      {isActive && (
        <Circle
          pos={"absolute"}
          size={"1.5"}
          bgColor={activeColor}
          right="5"
          top="2"
          zIndex="2"
        />
      )}
      <IconButton {...props} />
    </div>
  );
};
