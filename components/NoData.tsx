import { View, Text } from "react-native";
import React from "react";

interface NoDataProps {
  message: string;
}

const NoData: React.FC<NoDataProps> = ({ message }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">{message}</Text>
    </View>
  );
};

export default NoData;
