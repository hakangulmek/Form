import { useState } from "react";
import "./App.css";
import TaskCreate from "./companent/TaskCreate";
import TaskList from "./companent/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, desc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        desc,
      },
    ];
    setTasks(createdTasks);
  };
  const deleteTaskById = (id) => {
    const afterdeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterdeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return { id, title: updatedTitle, desc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
