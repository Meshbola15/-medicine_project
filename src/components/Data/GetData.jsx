import React, { useEffect, useState } from "react";
import medicalDataService from "../../Services/Medicial.services";
import Cards from "../Cards/Cards";

const GetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await medicalDataService.getAllmedical();
    console.log(data.docs);
    setData(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  return (
    <div>
      {data.map((doc) => {
        return <Cards key={doc.id} name={doc.name} price={doc.price} />;
      })}
    </div>
  );
};

export default GetData;
