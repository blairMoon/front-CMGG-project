import { forwardRef } from "react";
import { Radio, RadioProps } from "@chakra-ui/react";

interface MyRadioProps extends RadioProps {
  testId: string;
}

export const MyRadio = forwardRef<HTMLInputElement, MyRadioProps>(
  ({ testId, children, ...props }, ref) => {
    return (
      <div data-testid={testId} style={{ width: "auto" }}>
        <Radio {...props} ref={ref}>
          {children}
        </Radio>
      </div>
    );
  }
);
