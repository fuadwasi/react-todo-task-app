import React from 'react'
import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTask();
  }, []);

  // fatch all tasks from json server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:12568/tasks");
    const data = await res.json();
    //console.log(data);
    return data;
  };

  // fatch all tasks from json server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:12568/tasks/${id}`);
    const data = await res.json();
    //console.log(data);
    return data;
  };

  // adding task
  const addTask = async (task) => {
    console.log(task);
    const res = await fetch(`http://localhost:12568/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random()*1000)+1
    // const newTask={id, ...task}
    // setTasks([...tasks,newTask])
    //setShowAddTask(false)
  };

  // delete task
  const deleteTask = async (id) => {
    //console.log("task deleted",id)
    await fetch(`http://localhost:12568/tasks/${id}`, {
      method: "Delete",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = async(id) => {
const taskToToggle = await fetchTask(id)
const upTask = {...taskToToggle,reminder:!taskToToggle.reminder}
    const res = await fetch(`http://localhost:12568/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(upTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        showAdd={showAddTask}
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to Show"
      )}
    </div>
  );
}

export default App;
