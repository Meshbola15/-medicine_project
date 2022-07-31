import React, { useState, useEffect } from "react";
import Alert from "../../components/Alert/Alert";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Items = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [dosage, setDosage] = useState("");
  const [desc, setDesc] = useState("");
  const [position, setPosition] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, seteditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        price: price,
        minPrice: minPrice,
        useage: dosage,
        position: position,
        desc: desc,
      };
      setList([...list, newItem]);
      setName("");
      setPrice("");
      setMinPrice("");
      setDosage("");
      setPosition("");
      setDesc("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    seteditID(id);
    setName(specificItem.title);
    setPrice(specificItem.price);
    setMinPrice(specificItem.minPrice);
    setDosage(specificItem.useage);
    setPosition(specificItem.position);
    setDesc(specificItem.desc);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[80%] font-[consolas] md:max-w-[60%] my-20 shadow-lg rounded-xl p-4 bg-white">
        <section className="   ">
          <form onSubmit={handleSubmit}>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
            <h3 className="text-4xl font-[poppins] uppercase font-black text-center m-4">
              Item List{" "}
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
            <List items={list} removeItem={removeItem} editItem={editItem} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
