import { forwardRef } from "react";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";

interface MyCheckboxProps extends CheckboxProps {
  testId: string;
}

export const MyCheckbox = forwardRef<HTMLInputElement, MyCheckboxProps>(
  ({ testId, children, ...props }, ref) => {
    return (
      <div data-testid={testId}>
        <Checkbox {...props} ref={ref} w="100%">
          {children}
        </Checkbox>
      </div>
    );
  }
);
