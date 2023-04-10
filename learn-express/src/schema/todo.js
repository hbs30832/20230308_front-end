import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, required: true },
});

export default todoSchema;
