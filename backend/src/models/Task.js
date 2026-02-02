import mongoose from "mongoose";
export default mongoose.model("Task", new mongoose.Schema({
  title: String,
  completed: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}));