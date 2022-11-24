const express = require("express");
const app = express();
const port = 3000;

const tasks = require("./routes/tasks");

//middleware

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status = 200;
  res.send("Hello world");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
