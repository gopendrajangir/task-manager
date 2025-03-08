import { View, ActivityIndicator } from "react-native";
import React from "react";
import { useGetTask } from "@/queries/tasks";
import TaskDetails from "@/components/screens/(main)/(tasks)/task-details/TaskDetails";
import { useLocalSearchParams } from "expo-router";

const TaskDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = useGetTask(id);

  return (
    <View className="flex-1">
      {isLoading ? (
        <ActivityIndicator className="color-hero flex-1" size="large" />
      ) : (
        <TaskDetails data={data} />
      )}
    </View>
  );
};

export default TaskDetailsScreen;
