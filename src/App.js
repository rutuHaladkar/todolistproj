import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);  

   
  const addTask = () => {
      const newTask = { id: taskId, text: data };  
      setTasks([...tasks, newTask]);
      setTaskId(taskId + 1); 
      setData("");  
  };

   
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

   
  const clearInput = () => {
    setData("");
  };

  return (
    <div className="App">      
      <div className="App-header">To-Do List</div>
      <div className="input-container">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="add-btn" onClick={addTask}>Add</button>
        <button className="clear-btn" onClick={clearInput}>Clear</button>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <div className="task">
              <h3 key={task.id}>{task.text}</h3>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
