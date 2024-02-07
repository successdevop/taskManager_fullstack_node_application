const TaskSchema = require("../model/taskModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const { customAPIErrorFunc } = require("../errors/errorClassHandler");

const getAllTask = asyncWrapper(async (req, res) => {
  const task = await TaskSchema.find({});
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await TaskSchema.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await TaskSchema.findOne({ _id: taskID });
  if (!task) {
    return next(
      customAPIErrorFunc(404, `Task with id : (${taskID}) does not exist`)
    );
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await TaskSchema.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(
      customAPIErrorFunc(404, `Task with id : (${taskID}) does not exist`)
    );
  }
  res.status(200).json({ task });
});

const deleteSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await TaskSchema.findByIdAndDelete(taskID);
  if (!task) {
    return next(
      customAPIErrorFunc(404, `Task with id : (${taskID}) does not exist`)
    );
  }
  res.status(200).json({ status: "success", msg: "Task delete successfully" });
});

const deleteAllTask = asyncWrapper(async (req, res) => {
  const task = await TaskSchema.deleteMany({});
  res.status(200).json({ status: "success", msg: "All task deleted" });
});

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteSingleTask,
  deleteAllTask,
};
