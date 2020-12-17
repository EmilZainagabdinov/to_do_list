import React from "react";

const Task = props => {
  return (
      <div className="task">
        <p className='taskText'>{props.taskText}</p>
        <button className='removeButton' onClick={props.remove}>&#10005;</button>
      </div>
  )
};

export default Task;