import React, { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCatagories = menu.map((item) => item.category);
// const tempSet = new Set(tempCatagories);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log("categ", category);
    if (category === "all") {
      return setMenuItems(menu);
      
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  console.log("hook", categories);
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
