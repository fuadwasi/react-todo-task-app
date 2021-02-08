import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete}) => {
    return (
        <div className="task">
            <h4>{task.id}</h4>
            <h3>
                {task.text} 
                <FaTimes onClick={onDelete} style={{color:'black', cursor:'pointer'}}/>
            </h3>
            <p>{task.day}</p>
            

        </div>
    )
}

export default Task
