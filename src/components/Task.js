import React from "react";
function Task({ task, removeTask, selectTask }) {
const handleRemove = () => {
removeTask(task.id);
};
const handleSelect = () => {
selectTask(task);
};
return (
<div>
    <center>
<h3>{task.title}</h3>

<p>{task.description}</p>
<button className="btn btn-primary" style={{marginRight:10}} onClick={handleRemove}>Delete</button>
<button className="btn btn-primary" onClick={handleSelect}>Edit</button>
</center>
</div>

);
}
export default Task;