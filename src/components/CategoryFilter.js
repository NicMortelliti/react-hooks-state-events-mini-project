import React from "react";

function CategoryFilter({ categories, selectedCat, handleCatSelect }) {
  const btnElements = categories.map(category => {
    return (
      <button
        key={category}
        className={category === selectedCat ? "selected" : null}
        onClick={() => handleCatSelect(category)}
      >
        {category}
      </button>
    );
  });

  //class=selected

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnElements}
    </div>
  );
}

export default CategoryFilter;
