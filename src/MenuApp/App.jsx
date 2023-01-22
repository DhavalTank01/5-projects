import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./style.css";
import Menu from "./Menu";
const MenuApp = () => {
  const [MenuData, setMenu] = useState(Menu);
  const cateList = [
    ...new Set(
      MenuData.map((cele) => {
        return cele.category;
      })
    ),
    "all",
  ];
  const [MenuList, setList] = useState(cateList);

  const filterItem = (category) => {
    if (category === "all") {
      setMenu(Menu);
    } else {
      const updateList = Menu.filter((cele) => {
        return cele.category === category;
      });
      setMenu(updateList);
    }
  };

  return (
    <>
      <Navbar />
      <MenuBar filterItem={filterItem} MenuList={MenuList} />
      <Cards Menu={MenuData} />
    </>
  );
};

export default MenuApp;
