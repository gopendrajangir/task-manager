import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";
import { router } from "expo-router";
import useAuthSelector from "@/hooks/useAuthSelector";

const HeaderProfileButton = () => {
  const auth = useAuthSelector();

  return (
    <TouchableOpacity
      className="rounded-full bg-orange-200"
      onPress={() => {
        router.navigate("/(main)/(user)/profile");
      }}
    >
      <Avatar size="md">
        <AvatarFallbackText>{auth.user?.name ?? "No Name"}</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://i.pravatar.cc/150?img=4",
          }}
        />
      </Avatar>
    </TouchableOpacity>
  );
};

export default HeaderProfileButton;
