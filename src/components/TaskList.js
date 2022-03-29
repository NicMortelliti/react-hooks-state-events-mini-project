import React from "react";
import Task from "./Task.js";

function TaskList({ tasks, handleTaskDelete, selectedCat }) {
  const tasksArray = tasks.map(task => {
    return (
      <Task
        key={task.text + task.category}
        text={task.text}
        category={task.category}
        handleTaskDelete={handleTaskDelete}
      />
    );
  });

  return (
    <div className="tasks">
      <ul>{tasksArray}</ul>
    </div>
  );
}

export default TaskList;
