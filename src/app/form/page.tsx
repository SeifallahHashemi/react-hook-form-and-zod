import React from "react";
import FormValidationWithHookForm from "@/components/form/form-validation-with-hook-form";
import ValidationReactHookFormZod from "@/components/form/validation-react-hook-form-zod";

const FormPage = () => {
  return (
    <div
      className={
        "max-w-xl container h-screen grid place-items-center text-black"
      }
    >
      {/*<FormValidationWithHookForm />*/}
        <ValidationReactHookFormZod />
    </div>
  );
};

export default FormPage;
