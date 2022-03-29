import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [detailsState, setDetailsState] = useState();
  const [catState, setCatState] = useState();

  const catArray = categories.map(cat => {
    if (cat !== "All") {
      return <option>{cat}</option>;
    }
  });

  // Update the state containing details
  function updateDetails(event) {
    setDetailsState(event.target.value);
  }

  // Update the state containing category
  function updateCategory(event) {
    setCatState(event.target.value);
  }

  // Handle form submission event
  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text: detailsState,
      category: catState,
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={updateDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={updateCategory}>
          {catArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
