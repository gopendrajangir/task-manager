import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import FormTextInput from "@/components/form-control/FormTextInput";
import AppButton from "@/components/AppButton";
import FormInputError from "@/components/form-control/FormInputError";
import { useSignupMutation } from "@/queries/auth";
import { SignupPayload } from "@/types/requests";
import { User } from "@/types/responses";
import useAppDispatch from "@/hooks/useAppDispatch";
import { login } from "@/redux/slices";
import { router } from "expo-router";

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSuccess = (user: User) => {
    dispatch(login(user));
  };

  const { mutate, isPending } = useSignupMutation({ onSuccess });

  const onSubmit = (data: SignupPayload) => {
    mutate(data);
  };

  return (
    <View className="px-[4vw] gap-[4vw]">
      <Text className="text-[8vw] mb-[3vw] font-bold color-white">Signup</Text>
      <View className="gap-3">
        <Controller
          control={control}
          rules={{
            validate: async (name) => {
              try {
                yup
                  .string()
                  .min(5, "Name should be atleast 5 characters long")
                  .max(20, "Name should be atmost 20 characters long")
                  .required("Name is required")
                  .validateSync(name);
                return true;
              } catch (error: unknown) {
                return (error as Error).message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && errors.name.message && (
          <FormInputError error={errors.name.message} />
        )}
      </View>
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
                  .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
                    "Password must contain at least one letter, one number, and one special character (!@#$%^&*)"
                  )
                  .min(5, "Password should be at least 5 characters long")
                  .max(20, "Password should be at most 20 characters long")
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
        title="Signup"
        loading={isPending}
        onPress={handleSubmit(onSubmit)}
      />
      <View className="flex-row justify-center">
        <Text className="text-lg text-white">Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/login");
          }}
        >
          <Text className="text-lg underline text-hero">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupForm;
