import React, { useState } from "react";
import Tag from "./Tag";

const Cards = ({ name, dosage, desc, image, position, price, minPrice }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" h-auto shadow-xl rounded-2xl w-[90%] md:w-[40%] lg:max-w-[30%] p-3 m-1 bg-white hover:shadow-2xl">
      <div className="w-[30%] h-[4px] bg-red-200 my-4 rounded-md shadow-sm"></div>
      {/* <img src={image} alt={desc} className="w-[20rem] text-center" /> */}
      <div
        className="space-y-2 text-left cursor-pointer"
        onClick={() => setShowModal(!showModal)}

      >
        <Tag tagName="name" text={name} />
        <Tag tagName="Price" text={price} />
        {showModal && (
          <div className="space-y-2 text-left">
            <Tag tagName="Min Price" text={minPrice} />
            <Tag tagName="Useage" text={dosage} />
            <Tag tagName="Position" text={position} />
            <Tag tagName="Description" text={desc} />
          </div>
        )}
        <p className="text-center p-2 rounded-full capitalize font-[consolas] font-[400] text-red-300">
          {showModal ? "click to close" : "Click to open"}
        </p>
      </div>
    </div>
  );
};

export default Cards;
