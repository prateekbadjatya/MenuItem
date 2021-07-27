import React from "react";

const Categories = ({ uniqueCategory, filterItems }) => {
  return (
    <div className="btn-container">
      {/*   <button className="filter-btn" onClick={() => filterItems("ALL")}>
        {" "}
        ALL
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        {" "}
        breakfast
      </button> */}

      {uniqueCategory.map(item => {
        return (
          <button className="filter-btn" onClick={() => filterItems(item)}>
            {" "}
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
