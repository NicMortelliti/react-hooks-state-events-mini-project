import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCat, setSelectedCat] = useState("All");

  function handleCatSelect(category) {
    setSelectedCat(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCat={selectedCat}
        handleCatSelect={handleCatSelect}
      />
      <NewTaskForm />
      <TaskList tasks={TASKS} selectedCat={selectedCat} />
    </div>
  );
}

export default App;

/*

App
 ├--Task List
 |   ├--Task
 |   ├--Task
 |   ├--Task
 |   ├--Task
 |   ├--Task



*/
