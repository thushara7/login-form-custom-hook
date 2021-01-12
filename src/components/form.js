import React, { useState } from "react";
import useForm from "../useForm";
import ValidateLogin from "../validateLogin";
const Form = () => {
  const { handleChange, handleSubmit, value, error } = useForm(
    submit,
    ValidateLogin
  );
  function submit() {
    console.log("submit success");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          {" "}
          <label>Email</label>
        </div>
        <div>
          {" "}
          <input
            type="emai"
            name="email"
            onChange={handleChange}
            value={value.email}
          ></input>
          {error.email && <p>{error.email}</p>}
        </div>
        <div>
          {" "}
          <label>Password</label>
        </div>
        <div>
          {" "}
          <input
            type="password"
            onChange={handleChange}
            value={value.password}
            name="password"
          ></input>
          {error.password && <p>{error.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
