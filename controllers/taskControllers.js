const TaskSchema = require("../model/taskModel");

const getAllTask = async (req, res) => {
  try {
    const task = await TaskSchema.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ status: "error", msg: "No task found" });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await TaskSchema.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "An error occurred while creating task...",
    });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskSchema.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({
        status: "error",
        mg: `Task with id : (${taskID}) does not exist`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: error,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskSchema.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        status: "error",
        msg: `Task with id : (${taskID}) does not exist`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: error,
    });
  }
};

const deleteSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskSchema.findByIdAndDelete(taskID);
    if (!task) {
      return res.status(404).json({
        status: "error",
        msg: `Task with id : (${taskID}) does not exist`,
      });
    }
    res
      .status(200)
      .json({ status: "success", msg: "Task delete successfully" });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: error,
    });
  }
};

const deleteAllTask = async (req, res) => {
  try {
    const task = await TaskSchema.deleteMany({});
    res.status(200).json({ status: "success", msg: "All task deleted" });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: error,
    });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteSingleTask,
  deleteAllTask,
};
