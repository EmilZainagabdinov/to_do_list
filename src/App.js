import React, {useState} from "react";
import {nanoid} from 'nanoid';
import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";

const App = () => {
  const [toDoList, setToDoList] = useState([
    {id: '4KCiJloh8TUUNSe5qSBj3', task: 'Pre-order Cyberpunk 2077', isActive: true},
    {id: 'THF32GMlMBgSjXpL6TX48', task: 'Download Cyberpunk 2007', isActive: true},
    {id: 'ahbsQpCutKPH1iN3dgK9-', task: 'Play Cyberpunk 2077', isActive: true},
    {id: 'cZRCu9Od8-JypU3-jZ3ea', task: 'Get butthurt', isActive: true}
  ]);

  const [inputField, setInputField] = useState('');

  const saveInput = event => {
    const newTask = event.target.value;

    setInputField(newTask);
  };

  const addTask = () => {
    const task = {};
    task.task = inputField;
    task.id = nanoid();
    task.isActive = true;

    const toDoListCopy = [...toDoList];
    toDoListCopy.push(task);

    setToDoList(toDoListCopy);
    setInputField('');
  };

  const removeTask = id => {
    const index = toDoList.findIndex(task => task.id === id);
    const toDoListCopy = [...toDoList];
    toDoListCopy.splice(index, 1);

    setToDoList(toDoListCopy);
  };

  const changeStatus = id => {
    const index = toDoList.findIndex(task => task.id === id);
    const taskCopy = {...toDoList[index]};
    taskCopy.isActive = !taskCopy.isActive;

    const toDoListCopy = [...toDoList];
    toDoListCopy[index] = taskCopy;

    setToDoList(toDoListCopy);
  };

  const taskList = (
      <>
        {toDoList.map((task) => {
          return <Task
              key={task.id}
              taskText={task.task}
              taskStatus={task.isActive}
              switchStatus={() => changeStatus(task.id)}
              remove={() => {
                removeTask(task.id)
              }}
          />
        })}
      </>
  );

  return (
      <div className="App">
        <AddTaskForm
            input={inputField}
            onAddClick={addTask}
            onTaskChange={event => saveInput(event)}
        />
        {taskList}
      </div>
  );
}

export default App;
