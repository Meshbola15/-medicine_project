import React, { useState, useEffect } from "react";
import Alert from "../../components/Alert/Alert";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";
import medicalDataService from "../../Services/Medicial.services";

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return JSON.parse(localStorage.getItem("list"));
//   } else {
//     return [];
//   }
// };

const Items = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [dosage, setDosage] = useState("");
  const [desc, setDesc] = useState("");
  const [position, setPosition] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editID, seteditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const getData = async () => {
    const data = await medicalDataService.getAllmedical();
    console.log(data.docs);
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

  // useEffect((id) => {
  //   if (id !== undefined && id !== "") {
  //     editItemList();
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name) {
        // display alert
        showAlert(true, "danger", "please enter a value");
      } else if ((name, price, minPrice, dosage, desc && isEditing)) {
        // deal with edit
        setList(
          list.map((item) => {
            if (item.id === editID) {
              return {
                ...item,
                title: name,
                price: price,
                minPrice: minPrice,
                useage: dosage,
                position: position,
                desc: desc,
              };
            }
            return item;
          })
        );
        setName("");
        setPrice("");
        setMinPrice("");
        setDosage("");
        setPosition("");
        setDesc("");
        seteditID(null);
        setIsEditing(false);
        showAlert(true, "success", "value changed");
      } else {
        //show alert
        const newItem = {
          // id: new Date().getTime().toString(),
          title: name,
          price: price,
          minPrice: minPrice,
          useage: dosage,
          position: position,
          desc: desc,
        };
        // setList([...list, newItem]);
        await medicalDataService.addMedical(newItem);
        showAlert(true, "success", "item added to the list");
        setName("");
        setPrice("");
        setMinPrice("");
        setDosage("");
        setPosition("");
        setDesc("");
      }
    } catch (err) {
      showAlert(true, "danger", "unable to add item to the list");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const removeItem = async (id) => {
    showAlert(true, "danger", "item removed");
    // setList(list.filter((item) => item.id !== id));
    await medicalDataService.deleteMedical(id);
    getMedicial();
  };
  const editItemList = async (id) => {
    // const specificItem = list.find((item) => item.id === id);
    // setIsEditing(true);
    // seteditID(id);
    // setName(specificItem.title);
    // setPrice(specificItem.price);
    // setMinPrice(specificItem.minPrice);
    // setDosage(specificItem.useage);
    // setPosition(specificItem.position);
    // setDesc(specificItem.desc);

    setIsEditing(true);
    try {
      if (id !== undefined || id !== "") {
        await medicalDataService.updateMedical(id, newItem);
        setAlert(true, "success", "Updated successfully");
      } else {
        await medicalDataService.addMedical(newItem);
        setAlert(true, "success", "New item Added successfully");
      }
      const specificItem = await medicalDataService.getMedicial(id);
      console.log("the record is:", specificItem.data());
      setName(specificItem.data().title);
      setPrice(specificItem.data().price);
      setMinPrice(specificItem.data().minPrice);
      setDosage(specificItem.data().useage);
      setPosition(specificItem.data().position);
      setDesc(specificItem.desc);
    } catch (error) {
      showAlert(true, "danger", "unable to edit now");
    }
  };
  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(list));
  // }, [list]);
  return (
    <div className="w-full flex justify-center ">
      <input
        className="border border-gray-200 bg-gray-100 shadow-md rounded-full outline-none max-w-[90%] md:max-w-[50%] shadow-gray-200 focus:shadow-2xl w-full h-10 focus:border-gray-300 p-4 font-[consolas] capitalize fixed top-24 "
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="type something"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="max-w-[80%] font-[consolas] md:max-w-[60%] my-20 shadow-lg  rounded-xl p-4 bg-white">
        <section className="">
          <form onSubmit={handleSubmit}>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
            <h3 className="text-4xl font-[poppins] uppercase font-black text-center m-4">
              Item List
            </h3>
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Add Items..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type="text"
                placeholder="add price...."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                type="text"
                placeholder="add min price...."
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <Input
                type="text"
                placeholder="add useage...."
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
              />
              <Input
                type="text"
                placeholder="add position...."
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <Input
                type="text-box"
                placeholder="add desc...."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="h-20"
              />

              <button
                type="submit"
                className="text-white bg-blue-400 text-xl px-4 py-2 rounded-lg capitalize font-bold"
              >
                {isEditing ? "edit" : "submit"}
              </button>
            </div>
          </form>
          <div className="">
            <List
              items={list.filter((item) => {
                if (searchTerm == "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })}
              removeItem={removeItem}
              editItem={editItemList}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
