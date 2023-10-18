import React, { useState } from "react";
function AddForm({ addTask }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
const task = {
id: Math.floor(Math.random() * 10000),
title,
description,
};
addTask(task);
setTitle("");
setDescription("");
};
return (
<div>
    
<h3 className="text-center display-6">Add Task</h3>
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
<button className="btn btn-primary" type="submit">Add</button>
</center>
</form>
</div>
);
}
export default AddForm;