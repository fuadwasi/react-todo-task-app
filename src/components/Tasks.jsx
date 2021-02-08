import React from 'react'
import Task from './Task'
// const tasks= [
//     { 
//         id: 1,
//         text:"Doctor dake",
//         day: "Feb 5th at 2:30pm",
//         reminder: true,
//     },
//     { 
//         id: 2,
//         text:"Meeting at school",
//         day: "Feb 6th at 4:30pm",
//         reminder: true,
//     },
//     { 
//         id: 3,
//         text:"Gumaite Jaw",
//         day: "Feb 7th at 7:30pm",
//         reminder: true,
//     },
// ]


const Tasks = (props) => {
    
    return (
        <div>
            {props.tasks.map((task)=>( 
            // <h3 key={task.id}>{task.text}</h3>
            <Task key={task.id}task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>
            ))}
        </div>
    )
}

export default Tasks
