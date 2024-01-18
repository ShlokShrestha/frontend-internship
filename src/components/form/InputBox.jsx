import React from "react";

const TextInput = ({ values, register }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={values.type}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {values.label}:
      </label>
      <input
        type={values.type}
        id={values.type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
        placeholder={values.placeholder}
        {...register(values.name)}
        required
      />
    </div>
  );
};

export default TextInput;
