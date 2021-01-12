import React from "react";

export const ValidateLogin = values => {
  let errors = {};
  //email
  //string to be more than 0chars
  if (!values.email) {
  } else if (values.email.length < 5) {
    errors.email = "Email is invalid";
  }
  // need to be of email format

  //password
  //be more than 8 char
  // be more than 0chars
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be more than 10 chars";
  }
  //
  return errors;
};

export default ValidateLogin;
