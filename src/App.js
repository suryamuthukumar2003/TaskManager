import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddForm from "./components/AddForm";
import UpdateTask from "./components/UpdateTask";
function App() {
const [tasks, setTasks] = useState([]);
const [selectedTask, setSelectedTask] = useState(null);
const addTask = (task) => {
setTasks([...tasks, task]);
};
const removeTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id));

};
const selectTask = (task) => {
setSelectedTask(task);
};
const updateTask = (id, updatedTask) => {
setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
setSelectedTask(null);
};
return (
<div>
  <header><h1 className="text-center display-1" style={{height:100,backgroundColor:"rgba(155,155,155,0.4)",}}>Task Manager</h1></header>
<TaskList tasks={tasks} removeTask={removeTask} selectTask={selectTask} />
<AddForm addTask={addTask} />
{selectedTask && (
<UpdateTask
selectedTask={selectedTask}
updateTask={updateTask}
setSelectedTask={setSelectedTask}
/>
)}
</div>
);
}
export default App;