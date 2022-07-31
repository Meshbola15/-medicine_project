import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" max-w-[80%] md:max-w-[60%]  ">
        <div className="bg-white p-3 shadow-xl rounded-xl">
          <h2 className="text-2xl capitalize font-[consolas] my-4 text-gray-800 font-black">
            please login to continue
          </h2>
          <form action="" className="">
            <label
              htmlFor="searchBar"
              className="text-2xl font-bold font-[poppins] pb-2 mt-8"
            >
              Username<span className="text-red-400">*</span>
            </label>
            <br />
            <input
              type="text"
              required
              id="searchbar"
              placeholder="Username"
              className="border border-gray-500 rounded-md focus:shadow-xl w-full h-10 focus:outline-none p-4 font-[consolas] capitalize "
            />
            <label
              htmlFor="password"
              className="text-2xl font-bold font-[poppins] pb-2 mt-8"
            >
              Password<span className="text-red-400">*</span>
            </label>
            <br />
            <input
              type="password"
              required
              id="password"
              placeholder="password"
              className="border border-gray-500 rounded-md  focus:shadow-xl w-full h-10 focus:outline-none p-4 font-[consolas] capitalize "
            />

            <button
              className="px-4 py-2 font-[consolas] text-2xl capitalize rounded-md bg-orange-500 mt-4 text-white "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
