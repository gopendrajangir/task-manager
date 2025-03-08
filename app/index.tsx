import React from "react";
import useAuthSelector from "@/hooks/useAuthSelector";
import { Redirect } from "expo-router";

const Index = () => {
  const auth = useAuthSelector();

  if (auth.isLoggedIn) {
    return <Redirect href="/(main)/(tasks)/home" />;
  } else {
    return <Redirect href="/(auth)/login" />;
  }
};

export default Index;
