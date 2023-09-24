"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, TSignUpSchema } from "../../../libs/types";

const ValidationReactHookFormZod = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isLoading },
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const submitFormHandler = async (data: TSignUpSchema) => {
    const response = await fetch("/api/formValidation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.log("filed to connect to server");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        console.log("something went wrong!!!")
      }
    }
    reset();
  };
  return (
    <form
      className={"flex space-y-2 flex-col w-full"}
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <input
        {...register("email")}
        type="email"
        placeholder={"Email"}
        className={"px-4 py-2 rounded"}
      />
      {errors.email && (
        <p className={"text-rose-600"}>{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder={"password"}
        className={"px-4 py-2 rounded"}
      />
      {errors.password && (
        <p className={"text-rose-600"}>{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder={"confirm password"}
        className={"px-4 py-2 rounded"}
      />
      {errors.confirmPassword && (
        <p className={"text-rose-600"}>{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type={"submit"}
        className={"rounded py-2 disabled:bg-gray-500 bg-cyan-500"}
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ValidationReactHookFormZod;
