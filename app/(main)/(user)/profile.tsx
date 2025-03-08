import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppButton from "@/components/AppButton";
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import useAuthSelector from "@/hooks/useAuthSelector";
import useAppDispatch from "@/hooks/useAppDispatch";
import { logout } from "@/redux/slices";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const auth = useAuthSelector();

  const dispatch = useAppDispatch();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1">
      <View className="flex-1 p-4 pt-0 items-center">
        <Avatar className="h-40 w-40 mt-5 mb-5">
          <AvatarFallbackText className="text-4xl">{auth.user?.name ?? "No Name"}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://i.pravatar.cc/150?img=4",
            }}
          />
        </Avatar>
        <Text className="text-2xl font-medium">
          {auth.user?.name ?? "No Name"}
        </Text>
        <AppButton
          title="Logout"
          onPress={() => {
            dispatch(logout());
          }}
          className="self-stretch mt-auto"
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
