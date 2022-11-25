const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status = 200;
    res.json({ amount: tasks.length, tasks });
  } catch (err) {
    res.status = 500;
    res.json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status = 201;
    res.json({ task, created: true });
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

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) res.status(404).json({ msg: `No task with this id` });
    res.status(200);
    res.json({ task, edited: true });
  } catch (err) {
    res.status = 500;
    res.json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) res.status(404).json({ msg: `No task with this id` });
    res.json({ task, deleted: true });
  } catch (err) {
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
