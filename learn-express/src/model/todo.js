import mongoose from "mongoose";
import todoSchema from "../schema/todo";

// src/model/todo.js
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
