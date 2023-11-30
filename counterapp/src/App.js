import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [counter, setCounter] = useState(15);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length === 0) return;
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const handleDeleteAll = () => {
    setTaskList([]);
  };

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>footer:{counter}</p>
      
      <br/>
      
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="your task"
            value={task}
            onChange={handleChange}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
