import HeaderProfileButton from "@/components/HeaderProfileButton";
import useAuthSelector from "@/hooks/useAuthSelector";
import { Redirect, Stack } from "expo-router";
import React from "react";

const TasksLayout = () => {
  const auth = useAuthSelector();

  if (!auth.isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tasks)/home"
        options={{
          title: "Tasks",
          headerRight: () => {
            return <HeaderProfileButton />;
          },
        }}
      />
      <Stack.Screen
        name="(tasks)/task-details"
        options={{
          title: "Task Details",
        }}
      />
      <Stack.Screen
        name="(tasks)/add-task"
        options={{
          title: "Add New Task",
        }}
      />
      <Stack.Screen
        name="(tasks)/edit-task"
        options={{
          title: "Edit Task",
        }}
      />
      <Stack.Screen
        name="(user)/profile"
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Stack>
  );
};

export default TasksLayout;
