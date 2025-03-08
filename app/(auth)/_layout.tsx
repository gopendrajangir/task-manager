import useAuthSelector from "@/hooks/useAuthSelector";
import { Redirect, Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  const auth = useAuthSelector();

  if (auth.isLoggedIn) {
    return <Redirect href="/(main)/(tasks)/home" />;
  }
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
