import React from "react";

const Tag = ({ tagName, text }) => {
  return (
    <div className="flex flex-row items-center space-x-3 font-[poppins] text-base uppercase">
      <h2 className="w-auto h-auto px-3 py-2 rounded-md text-white   bg-green-800">
        {tagName} :
      </h2>
      <h2 className="text-gray-700">{text}</h2>
    </div>
  );
};

export default Tag;
