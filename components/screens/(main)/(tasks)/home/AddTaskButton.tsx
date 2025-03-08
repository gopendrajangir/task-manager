import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { cssInterop } from "react-native-css-interop";
import cx from "classnames";
import { router } from "expo-router";

cssInterop(Ionicons, {
  className: {
    target: "style",
  },
});

interface AddTaskButtonProps extends TouchableOpacityProps {}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={cx(
        "h-16 w-16 rounded-full bg-hero justify-center items-center shadow-md",
        className
      )}
      onPress={() => {
        router.navigate("/(main)/(tasks)/add-task");
      }}
      {...props}
    >
      <Ionicons name="add" className="color-white" size={36} />
    </TouchableOpacity>
  );
};

export default AddTaskButton;
