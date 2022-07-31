import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p
      className={`text-gray-800 rounded-lg transition-opacity ease-in  shadow-lg py-1 text-center capitalize text-lg font-bold font-[Montserrat] alert-${type}`}
    >
      {msg}
    </p>
  );
};

export default Alert;
