import React from "react";

const Tag = ({ tagName, text }) => {
  return (
    <div className="flex flex-row items-center space-x-3 font-[consolas]  text-base capitalize">
      <h2 className="w-auto h-auto px-3 py-1 rounded-lg text-white bg-red-300 shadow-lg">
        {tagName}
      </h2>
      <h2 className="text-gray-500 capitalize">{text}</h2>
    </div>
  );
};

export default Tag;
