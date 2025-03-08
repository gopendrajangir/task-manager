import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import LogoIcon from "@/assets/images/Logo.svg";
import SignupForm from "@/components/screens/(auth)/signup/SignupForm";

const SignupScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView className="flex-1" behavior="height">
      <ScrollView
        className="flex-1"
        contentContainerClassName="bg-gray-800 grow"
      >
        <View style={{ paddingTop: insets.top }}>
          <View className="items-center py-20">
            <LogoIcon />
          </View>
          <SignupForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
