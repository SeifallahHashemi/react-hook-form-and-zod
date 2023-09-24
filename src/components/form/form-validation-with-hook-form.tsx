import React from "react";

const FormValidationWithHookForm = () => {
  return (
    <form className={"flex space-y-2 flex-col"}>
      <input type="email" placeholder={"Email"} className={"px-4 py-2 rounded"}/>
      <input type="password" placeholder={"password"} className={"px-4 py-2 rounded"}/>
      <input type="password" placeholder={"confirm password"} className={"px-4 py-2 rounded"}/>
      <button type={"submit"} className={"rounded py-2 disabled:bg-gray-500 bg-cyan-500"}>Submit</button>
    </form>
  );
};

export default FormValidationWithHookForm;
