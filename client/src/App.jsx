import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskCalender from "./components/Calender";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:8000/api/tasks");
      setTasks(res.data.data);
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskCalender tasks={tasks} />
    </div>
  );
}

export default App;
