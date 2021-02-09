import { useState } from "react";

function AddTask(props) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit =(e)=>{
      e.preventDefault()
      if(!text&& !day){
          alert("Input empty")
          return
      }
      props.onAdd({text,day,reminder})
      setText('')
      setDay("");
      setReminder(false);
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text"
          placeholder="Date and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input className="btn btn-block" type="submit" value="Save" />
    </form>
  );
}

export default AddTask;
