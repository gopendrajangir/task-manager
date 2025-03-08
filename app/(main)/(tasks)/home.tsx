import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import React from "react";
import AddTaskButton from "@/components/screens/(main)/(tasks)/home/AddTaskButton";
import { useGetAllTasks } from "@/queries/tasks";
import TaskItem from "@/components/screens/(main)/(tasks)/home/TaskItem";
import NoData from "@/components/NoData";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { data, isLoading, isRefetching, refetch } = useGetAllTasks();

  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 relative">
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator className="color-hero" size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          className="flex-1"
          ListEmptyComponent={<NoData message="No Tasks" />}
          contentContainerClassName="p-4 grow"
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => {
            return <TaskItem data={item} />;
          }}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
      <AddTaskButton
        className="absolute right-7"
        style={{ bottom: insets.bottom + 28 }}
      />
    </View>
  );
};

export default HomeScreen;
