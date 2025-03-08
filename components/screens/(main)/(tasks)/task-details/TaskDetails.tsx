import { View, Text, Alert } from "react-native";
import React from "react";
import { Task } from "@/types/responses";
import AppButton from "@/components/AppButton";
import NoData from "@/components/NoData";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useDeleteTask } from "@/queries/tasks";

interface TaskDetailsProps {
  data?: Task;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ data }) => {
  const onSuccess = () => {
    router.back();
  };

  const { mutate: deleteTask, isPending: deleteTaskPending } = useDeleteTask({
    onSuccess,
  });

  if (!data) {
    return <NoData message="No Details Found" />;
  }
  return (
    <View className="flex-1 p-4 gap-2">
      <Stack.Screen name="task-details" options={{ headerTitle: data.title }} />
      <Text className="text-xl leading-tight">{data.description}</Text>
      <View className="flex-row gap-4 mt-auto">
        <AppButton
          title="Edit"
          onPress={() => {
            router.navigate({
              pathname: "/(main)/(tasks)/edit-task",
              params: data,
            });
          }}
          disabled={deleteTaskPending}
          className="flex-1 bg-neutral-700"
          icon={<Ionicons name="pencil" size={16} color="#fff" />}
        />
        <AppButton
          title="Delete"
          onPress={() => {
            Alert.alert(
              "Delete Task",
              "Are you sure you want to delete this task",
              [
                {
                  text: "Delete",
                  onPress: () => {
                    deleteTask({ id: data._id });
                  },
                },
                {
                  text: "Cancel",
                  onPress: () => {},
                },
              ]
            );
          }}
          disabled={deleteTaskPending}
          loading={deleteTaskPending}
          className="flex-1"
          icon={<Ionicons name="trash" size={16} color="#fff" />}
        />
      </View>
    </View>
  );
};

export default TaskDetails;
