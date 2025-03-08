import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import FormTextInput from "@/components/form-control/FormTextInput";
import AppButton from "@/components/AppButton";
import FormInputError from "@/components/form-control/FormInputError";
import { useLoginMutation } from "@/queries/auth";
import { LoginPayload } from "@/types/requests";
import { User } from "@/types/responses";
import useAppDispatch from "@/hooks/useAppDispatch";
import { login } from "@/redux/slices";
import { router } from "expo-router";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSuccess = (user: User) => {
    console.log(user);
    dispatch(login(user));
  };

  const { mutate, isPending } = useLoginMutation({ onSuccess });

  const onSubmit = (data: LoginPayload) => {
    mutate(data);
  };

  return (
    <View className="px-[4vw] gap-[4vw]">
      <Text className="text-[8vw] mb-[3vw] font-bold color-white">Login</Text>
      <View className="gap-3">
        <Controller
          control={control}
          rules={{
            validate: async (email) => {
              try {
                yup
                  .string()
                  .email("Invalid Email")
                  .required("Email is required")
                  .validateSync(email);
                return true;
              } catch (error: unknown) {
                return (error as Error).message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && errors.email.message && (
          <FormInputError error={errors.email.message} />
        )}
      </View>
      <View className="gap-2">
        <Controller
          control={control}
          rules={{
            validate: async (password) => {
              try {
                yup
                  .string()
                  .required("Password is required")
                  .validateSync(password);

                return true;
              } catch (error: unknown) {
                return (error as Error).message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && errors.password.message && (
          <FormInputError error={errors.password.message} />
        )}
      </View>
      <AppButton
        title="Login"
        disabled={isPending}
        loading={isPending}
        onPress={handleSubmit(onSubmit)}
      />
      <View className="flex-row justify-center">
        <Text className="text-lg text-white">Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/signup");
          }}
        >
          <Text className="text-lg underline text-hero">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
