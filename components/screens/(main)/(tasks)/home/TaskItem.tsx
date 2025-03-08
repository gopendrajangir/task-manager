import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

import { Task } from "@/types/responses";
import classNames from "classnames";
import { router } from "expo-router";

interface TaskItemProps extends TouchableOpacityProps {
  data: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ data, className, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      className={classNames(
        "bg-white p-3 px-4 rounded-md min-28 gap-2",
        className
      )}
      onPress={() => {
        router.navigate({
          pathname: "/task-details",
          params: { id: data._id },
        });
      }}
    >
      <Text className="text-xl" numberOfLines={1} ellipsizeMode="tail">
        {data.title}
      </Text>
      <Text
        className="text-lg leading-snug text-gray-600"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {data.description}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
