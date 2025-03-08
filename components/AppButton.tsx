import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React from "react";
import classNames from "classnames";

interface AppButtonProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactElement;
  onPress: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  loading,
  disabled,
  className,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={classNames(
        "flex-row rounded-lg justify-center items-center h-[12vw] bg-hero gap-2",
        className
      )}
      disabled={disabled}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {icon}
          <Text className="text-white text-[5vw]">{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
