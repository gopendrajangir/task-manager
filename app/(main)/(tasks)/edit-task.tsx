import { View } from "react-native";
import React from "react";

import EditTaskForm from "@/components/screens/(main)/(tasks)/edit-task/EditTaskForm";
import { useLocalSearchParams } from "expo-router";
import { Task } from "@/types/responses";

const EditTaskScreen = () => {
  const params = useLocalSearchParams<Task>();

  return (
    <View className="flex-1">
      <EditTaskForm prevData={params} />
    </View>
  );
};

export default EditTaskScreen;
