import React, { useState } from "react";
import Task from "./Task.js";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  function deleteTask(text) {
    // delete task from state
    console.log(text);
    const updatedTaskList = taskList.filter(task => task.text !== text);
    setTaskList(updatedTaskList);
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}

      <ul>
        {taskList.map(eachTask => (
          <Task key={eachTask.text+eachTask.category} task={eachTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
