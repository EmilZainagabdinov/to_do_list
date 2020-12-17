import React from "react";

const Task = props => {
  let taskClass;
  let checkBox;

  if (props.taskStatus) {
    taskClass = 'task';
    checkBox = '\u2610';
  } else if (!props.taskStatus) {
    taskClass = 'task taskFinished';
    checkBox = '\u2611';
  }

  return (
      <div className='taskBody'>
        <div className={taskClass}>
          <span className='checkBox' onClick={props.done}>{checkBox}</span>
          <p>{props.taskText}</p>
        </div>
        <button className='removeButton' onClick={props.remove}>&#10005;</button>
      </div>
  )
};

export default Task;