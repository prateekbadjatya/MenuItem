import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const uniqueCategory = items.map(item => item.category);
uniqueCategory.unshift("ALL");
console.log(uniqueCategory);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = category => {
    const newItems =
      category !== "ALL"
        ? items.filter(item => item.category === category)
        : items;
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          uniqueCategory={[...new Set(uniqueCategory)]}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
