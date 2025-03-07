const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/taskRoute");
const { connectDB } = require("./config/db");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
