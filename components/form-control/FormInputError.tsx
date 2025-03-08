import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { cssInterop } from "react-native-css-interop";
import { ws } from "@/utils/size";

cssInterop(Ionicons, {
  className: {
    target: "style",
  },
});

interface FormInputErrorProps {
  error: string;
}

const FormInputError: React.FC<FormInputErrorProps> = ({ error }) => {
  return (
    <View className="flex-row items-center gap-2">
      <Ionicons name="warning" size={ws(16)} className="color-red-400" />
      <Text className="text-red-400">{error}</Text>
    </View>
  );
};

export default FormInputError;
