import { View } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { router } from "expo-router";

import FormTextInput from "@/components/form-control/FormTextInput";
import AppButton from "@/components/AppButton";
import FormInputError from "@/components/form-control/FormInputError";
import { AddTaskPayload } from "@/types/requests";
import { useAddTask } from "@/queries/tasks";

const AddTaskForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      title: "",
      description: "",
    },
  });

  const onSuccess = () => {
    router.back();
  };

  const { mutate, isPending } = useAddTask({ onSuccess });

  const onSubmit = (data: AddTaskPayload) => {
    mutate(data);
  };

  return (
    <View className="p-4 gap-5">
      <View className="gap-3">
        <Controller
          control={control}
          rules={{
            validate: async (title) => {
              try {
                yup
                  .string()
                  .min(10, "Title must contain atleast 10 characters")
                  .max(40, "Title must contain atmost 40 characters")
                  .required("Title is required")
                  .validateSync(title);
                return true;
              } catch (error: unknown) {
                return (error as Error).message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              placeholder="Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />
        {errors.title && errors.title.message && (
          <FormInputError error={errors.title.message} />
        )}
      </View>
      <View className="gap-3">
        <Controller
          control={control}
          rules={{
            validate: async (description) => {
              try {
                yup
                  .string()
                  .required("Description is required")
                  .min(10, "Description must contain atleast 10 characters")
                  .max(40, "Description must contain atmost 40 characters")
                  .validateSync(description);
                return true;
              } catch (error: unknown) {
                return (error as Error).message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              placeholder="Description"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="!h-40"
              multiline
              textAlignVertical="top"
            />
          )}
          name="description"
        />
        {errors.description && errors.description.message && (
          <FormInputError error={errors.description.message} />
        )}
      </View>
      <AppButton
        title="Add Task"
        disabled={isPending}
        loading={isPending}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default AddTaskForm;
