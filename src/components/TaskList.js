import React from "react";
import Task from "./Task";
function TaskList({ tasks, removeTask, selectTask }) {
return (
<div>
<h2 className="text-center display-5">Task List</h2>
{tasks.map((task) => (
<Task
key={task.id}
task={task}
removeTask={removeTask}
selectTask={selectTask}
/>
))}
</div>
);
}
export default TaskList;