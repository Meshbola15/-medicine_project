import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <h2 className=" text-center text-5xl font-black uppercase font-[Montserrat]">
        <span>404</span> <br />
        <h3 className="text-2xl capitalize">This Page doesn't exist</h3>
      </h2>
      <Link to="/" className="px-4 py-2 bg-red-400 rounded-lg text-white capitalize font-[consolas] text-base mt-5 hover:bg-orange-400 ">Go Back Home</Link>
    </div>
  );
};

export default Error;
