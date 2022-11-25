const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status = 200;
    res.json({ tasks });
  } catch (err) {
    res.status = 500;
    res.json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status = 201;
    res.json({ task });
  } catch (err) {
    res.status = 500;
    res.json({ msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) res.status(404).json({ msg: `No task with this id` });
    res.json({ task });
  } catch (err) {
    res.status = 500;
    res.json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) res.status(404).json({ msg: `No task with this id` });
    res.json({ task });
  } catch (error) {
    res.status = 500;
    res.json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
