import React from "react";
import "./input.css";

const FormInput = ({ label }) => {
  return (
    <label className="relative">
      <input
        type="text"
        className="h-20 text-2xl px-6 bg-white border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200"
        w-96
      />
      <span className="text-2xl rounded-md  text-white text-opacity-90 absolute left-4 bottom-0 px-2 transition duration-200 input-text">
        {label}
      </span>
    </label>
  );
};

export default FormInput;
