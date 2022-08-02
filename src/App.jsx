import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Items from "./Pages/NewItemPage/Items";
import "./App.css";
import Error from "./Pages/Error/Error";
import GetData from "./components/Data/GetData";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/edit" element={<Items />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    // <div className="">
    //   <GetData />
    // </div>
  );
};

export default App;
