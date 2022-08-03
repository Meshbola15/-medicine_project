import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import medicalDataService from "../../Services/Medicial.services";

const Hero = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await medicalDataService.getAllmedical();

    setList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [list]);

  if (loading === true) {
    return (
      <h2 className="text-5xl font-bold font-[montserrat] text-black text-center ">
        <svg
          className="animate-spin h-10 w-10 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading....
      </h2>
    );
  }

  return (
    <div>
      <section className="w-full text-center p-10">
        <input
          className="border border-gray-200 bg-gray-100 shadow-md rounded-full outline-none  md:max-w-[50%] shadow-gray-200 focus:shadow-2xl w-full h-10 focus:border-gray-300 p-4 font-[consolas] capitalize "
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="type something"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>
      <div className="flex flex-col min-h-screen items-center md:items-start justify-start md:flex-row flex-wrap w-full my-10 px-12">
        {list
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            } 
          })
          .map((item) => {
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
