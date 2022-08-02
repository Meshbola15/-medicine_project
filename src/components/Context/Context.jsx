import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [list, setList] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        list,
        setList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
