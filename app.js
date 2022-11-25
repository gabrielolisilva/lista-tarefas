const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/tasks");

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks);

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
