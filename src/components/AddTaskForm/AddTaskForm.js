import React from "react";

const AddTaskForm = props => {
  return (
      <div className='addTaskForm'>
        <input className='taskFormInput' type="text" value={props.input} onChange={props.onTaskChange} />
        <button className='taskFormButton' onClick={props.onAddClick}>Add</button>
      </div>
  );
};

export default AddTaskForm;