import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LogoIcon from "@/assets/images/Logo.svg";
import LoginForm from "@/components/screens/(auth)/login/LoginForm";

const LoginScreen = () => {
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
          <LoginForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
