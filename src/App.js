import React from 'react'
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks]= useState([
    
]
)

const addTask =(task)=> {
  //console.log(task)
  const id = Math.floor(Math.random()*1000)+1
  const newTask={id, ...task}
  setTasks([...tasks,newTask])
  setShowAddTask(false)
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
      <Header showAdd={showAddTask} onAdd={()=>{setShowAddTask(!showAddTask)}}/>
      {showAddTask?<AddTask onAdd={addTask}/>: ""}
      {tasks.length >0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No Task to Show'}
    </div>
  );
}

export default App;
