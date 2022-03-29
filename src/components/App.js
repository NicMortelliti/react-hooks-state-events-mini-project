import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [tasksStateArray, setTasksStateArray] = useState(TASKS);

  function handleTaskDelete(text) {
    const newTaskArray = tasksStateArray.filter(task => task.text !== text);
    setTasksStateArray(newTaskArray);
  }

  function handleCatSelect(newSelectedCat) {
    setSelectedCat(newSelectedCat);
  }

  const filteredTasks = tasksStateArray.filter(task => {
    if (selectedCat === "All") {
      return true;
    } else {
      return task.category === selectedCat;
    }
  });

  function onTaskFormSubmit(taskObj) {
    const newTasksArray = [...tasksStateArray, taskObj];
    setTasksStateArray(newTasksArray);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCat={selectedCat}
        handleCatSelect={handleCatSelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} handleTaskDelete={handleTaskDelete} />
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
