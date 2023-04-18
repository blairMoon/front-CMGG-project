import { forwardRef } from "react";
import { Radio, RadioProps, useColorMode } from "@chakra-ui/react";

interface MyRadioProps extends RadioProps {
  testId: string;
}

export const MyRadio = forwardRef<HTMLInputElement, MyRadioProps>(
  ({ testId, children, ...props }, ref) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <div data-testid={testId} style={{ width: "calc(100% / 4)" }}>
        <Radio
          {...props}
          ref={ref}
          w="100%"
          borderColor={
            colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"
          }
        >
          {children}
        </Radio>
      </div>
    );
  }
);
