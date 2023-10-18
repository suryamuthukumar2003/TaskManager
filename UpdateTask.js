import React, { useState, useEffect } from "react";
function UpdateTask({ selectedTask, updateTask, setSelectedTask }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
useEffect(() => {
setTitle(selectedTask.title);
setDescription(selectedTask.description);
}, [selectedTask]);
const handleSubmit = (e) => {
e.preventDefault();
const updatedTask = {
id: selectedTask.id,
title,
description,
};
updateTask(selectedTask.id, updatedTask);
setSelectedTask(null);
};
return (
<div>
<h3 className=" text-center display-6">Update Task</h3>

<form onSubmit={handleSubmit}>
    <center>
<label>
Title:
<input
className="form-control"
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</label>
<br />
<label>
Description:
<textarea
className="form-control"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
</label>
<br />
<button className="btn btn-primary" style={{marginRight:10}} type="submit">Update</button>
<button className="btn btn-primary" onClick={() => setSelectedTask(null)}>Cancel</button>
</center>
</form>
</div>
);
}
export default UpdateTask;