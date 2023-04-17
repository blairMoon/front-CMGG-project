import { Button, ButtonProps } from "@chakra-ui/react";

interface MyButtonProps extends ButtonProps {
  testId: string;
}

export const MyButton: React.FC<MyButtonProps> = ({
  testId,
  children,
  ...props
}) => {
  console.log({ ...props });
  return (
    <div data-testid={testId} style={{ width: "auto" }}>
      <Button {...props}>{children}</Button>
    </div>
  );
};
