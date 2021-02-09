import React from 'react'
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header'
import AddTask from './components/AddTask'
function App() {
  const [tasks, setTasks]= useState([
    { 
        id: 1,
        text:"Doctor dake",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    { 
        id: 2,
        text:"Meeting at school",
        day: "Feb 6th at 4:30pm",
        reminder: true,
    },
    { 
        id: 3,
        text:"Gumaite Jaw",
        day: "Feb 7th at 7:30pm",
        reminder: false,
    },
]
)

const addTask =(task)=> {
  console.log(task)
}

// delete task
const deleteTask=(id)=>{
  //console.log("task deleted",id)
  setTasks(tasks.filter((task)=>task.id!==id))
}
// toggle reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=> task.id===id?{...task, reminder: !task.reminder}:task))
}
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length >0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No Task to Show'}
    </div>
  );
}

export default App;
