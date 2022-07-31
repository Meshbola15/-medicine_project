import React from "react";
import Cards from "../Cards/Cards";
import nullImage from "../../assets/Images/null.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-3 w-full px-12">
      <Cards
        name="No Name"
        desc="text"
        dosage="null"
        minPrice="#300"
        price="#350"
        position="3:3"
      />
      <Cards
        name="No Name"
        desc="text"
        dosage="null"
        minPrice="#300"
        price="#350"
        position="3:3"
      />
      <Cards
        name="No Name"
        desc="text"
        dosage="null"
        minPrice="#300"
        price="#350"
        position="3:3"
      />
      <Cards
        name="No Name"
        desc="text"
        dosage="null"
        minPrice="#300"
        price="#350"
        position="3:3"
      />
      <Cards
        name="No Name"
        desc="text"
        dosage="null"
        minPrice="#300"
        price="#350"
        position="3:3"
      />
    </div>
  );
};

export default Hero;
