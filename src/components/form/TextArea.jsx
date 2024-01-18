import React from "react";

const TextArea = ({ register }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Description:
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border"
        placeholder="Write your product description"
        {...register("description")}
      ></textarea>
    </div>
  );
};

export default TextArea;
