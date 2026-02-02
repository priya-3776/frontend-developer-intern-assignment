import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/me", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log("Backend running on 5000"));
});