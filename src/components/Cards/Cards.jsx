import React, {useState} from "react";
import Tag from "./Tag";

const Cards = ({ name, dosage, desc, image, position, price, minPrice }) => {
    const [showText, setShowText] = useState(false);
  return (
    <div className=" h-auto shadow-xl rounded-2xl w-full p-3 bg-white">
      <div className="w-[30%] h-[4px] bg-green-800 my-4"></div>
      {/* <img src={image} alt={desc} className="w-[20rem] text-center" /> */}
      <div className="space-y-2 text-left">
        <Tag tagName="name" text={name} />
        <Tag tagName="Price" text={price} />
        <Tag tagName="Min Price" text={minPrice} />
        <Tag tagName="Useage" text={dosage} />
        <Tag tagName="Position" text={position} />
        
      </div>
    </div>
  );
};

export default Cards;
