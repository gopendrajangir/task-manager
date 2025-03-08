import { View } from "react-native";
import React from "react";

import AddTaskForm from "@/components/screens/(main)/(tasks)/add-task/AddTaskForm";

const AddTaskScreen = () => {
  return (
    <View className="flex-1">
      <AddTaskForm />
    </View>
  );
};

export default AddTaskScreen;
