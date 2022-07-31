import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/LoginPage/login";
import Items from "./Pages/NewItemPage/Items";
import "./App.css"

const App = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Items />
      {/* <Dashboard /> */}
      {/* <Login /> */}
      {/* <Searchbar />
      <Hero /> */}
    </div>
  );
};

export default App;
