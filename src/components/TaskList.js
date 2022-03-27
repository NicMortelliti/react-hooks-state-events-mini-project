import React, { useState } from "react";
import Task from "./Task.js";

function TaskList({ tasks, selectedCat }) {
  const [taskList, setTaskList] = useState(tasks);

  function handleTaskUpdate(text) {
    // delete task from state
    console.log(text);
    let updatedTaskList = taskList.filter(task => task.text !== text);
    console.log(selectedCat);
    updatedTaskList = updatedTaskList.filter(
      task => task.category === selectedCat
    );

    setTaskList(updatedTaskList);
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}

      <ul>
        {taskList.map(eachTask => (
          <Task
            key={eachTask.text + eachTask.category}
            task={eachTask}
            deleteTask={handleTaskUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
