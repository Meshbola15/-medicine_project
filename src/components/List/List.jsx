import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="">
      {items.map((item) => {
        const { id, title, price, useage, minPrice, position, desc } = item;
        return (
          <article
            key={id}
            className="bg-gray-200 p-4 m-4 rounded-lg shadow-xl "
          >
            <div className="flex flex-col justify-start text-base font-bold">
              <p>Name: {title}</p>
              <p>Price: {price}</p>
              <p>Min Price: {minPrice}</p>
              <p>Dosage: {useage}</p>
              <p>Position: {position}</p>
              <p>Description: {desc}</p>
            </div>
            <div className="space-x-2 text-2xl">
              <button
                className="text-green-500"
                type="button"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500"
                type="button"
                onClick={() => removeItem(id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
