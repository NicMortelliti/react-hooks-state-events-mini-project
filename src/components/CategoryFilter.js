import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const btnList = [...categories];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {btnList.map(eachBtn => (
        <button key={eachBtn}>{eachBtn}</button>
      ))}
      ))
    </div>
  );
}

export default CategoryFilter;
