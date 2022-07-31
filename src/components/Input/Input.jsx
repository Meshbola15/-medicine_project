import React from "react";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      type={type}
      className="w-full font-[consolas] capitalize bg-gray-200 border-none hover:shadow-md focus:outline-none focus:shadow-lg p-4 h-4 rounded-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
