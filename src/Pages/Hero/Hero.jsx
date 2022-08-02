import React, { useState, useRef, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import medicalDataService from "../../Services/Medicial.services";

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return JSON.parse(localStorage.getItem("list"));
//   } else {
//     return [];
//   }
// };

const Hero = () => {
  const [list, setList] = useState([]);
  const searchref = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await medicalDataService.getAllmedical();
    setList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
     
    );
  };
  return (
    <div>
      <section className="w-full text-center p-10">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="type something"
          ref={searchref}
          className="border border-gray-200 bg-gray-100 shadow-md rounded-full outline-none  md:max-w-[50%] shadow-gray-200 focus:shadow-2xl w-full h-10 focus:border-gray-300 p-4 font-[consolas] capitalize "
        />
      </section>
      <div className="flex flex-col min-h-screen items-center md:items-start justify-start md:flex-row flex-wrap w-full my-10 px-12">
        {list.map((item) => {
          const { id, title, price, useage, minPrice, position, desc } = item;
          return (
            <Cards
              key={id}
              name={title}
              desc={desc}
              dosage={useage}
              minPrice={minPrice}
              price={price}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
