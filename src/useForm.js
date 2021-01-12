import React, { useState, useEffect } from "react";

const useForm = (callback, ValidateLogin) => {
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [isSubmittibg, setIsSubmittibg] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValue({ ...value, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setError(ValidateLogin(value));
    setIsSubmittibg(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmittibg) {
      callback();
    }
  }, [error]);
  return { handleChange, handleSubmit, value, error };
};

export default useForm;
