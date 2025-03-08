import "@/global.css";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "react-native-reanimated";

import { store } from "@/redux/store";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const RootLayoutMain = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <GluestackUIProvider>
          <QueryClientProvider client={queryClient}>
            <RootLayoutMain />
          </QueryClientProvider>
        </GluestackUIProvider>
      </GestureHandlerRootView>
      <StatusBar style="auto" translucent={false} />
    </Provider>
  );
};

export default RootLayout;
