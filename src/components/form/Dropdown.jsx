import React from "react";

const Dropdown = ({ option, register }) => {
  return (
    <>
      <div className="mb-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Category:
        </label>
        <select
          name="category"
          id="category"
          className="w-full bg-gray-50 p-2.5 border-gray-300 text-gray-900 text-sm"
          {...register("category")}
        >
          {option.map((item, index) => (
            <option value={item.title} key={index} className="text-gray-500">
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
