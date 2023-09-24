"use client";
import React from "react";
import {FieldValues, useForm} from "react-hook-form";

const FormValidationWithHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();
  const submitFormHandler = async (form: FieldValues) => {
      await new Promise((resolve) => setTimeout(resolve,1500))

      reset()
  }
  return (
    <form className={"flex space-y-2 flex-col w-full"} onSubmit={handleSubmit(submitFormHandler)}>
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder={"Email"}
        className={"px-4 py-2 rounded"}
      />
        {errors.email && (<p className={"text-rose-600"}>{`${errors.email.message}`}</p>)}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: { value: 12, message: "Must be at latest 12 character" },
        })}
        type="password"
        placeholder={"password"}
        className={"px-4 py-2 rounded"}
      />
        {errors.password && (<p className={"text-rose-600"}>{`${errors.password.message}`}</p>)}
      <input
        {...register("confirmPassword", {
          required: "Password is required",
            validate: value => value === getValues("password") || "Password must be matched",
        })}
        type="password"
        placeholder={"confirm password"}
        className={"px-4 py-2 rounded"}
      />
        {errors.confirmPassword && (<p className={"text-rose-600"}>{`${errors.confirmPassword.message}`}</p>)}
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

export default FormValidationWithHookForm;
