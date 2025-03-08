import { TextInput, TextInputProps } from "react-native";
import React from "react";

import cx from "classnames";

interface FormTextInputProps extends TextInputProps {}

const FormTextInput: React.FC<FormTextInputProps> = ({
  className,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      className={cx(
        "bg-white rounded-md px-[3vw] h-[12vw] text-[4vw]",
        className
      )}
    />
  );
};

export default FormTextInput;
