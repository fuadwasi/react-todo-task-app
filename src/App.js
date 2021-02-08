import React from 'react'
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header'
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
        reminder: true,
    },
]
)

// delete task
const deleteTask=(id)=>{
  console.log("task deleted")
}
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
