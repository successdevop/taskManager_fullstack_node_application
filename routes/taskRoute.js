const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  deleteAllTask,
  getSingleTask,
  updateTask,
  deleteSingleTask,
} = require("../controllers/taskControllers");

router.route("/").get(getAllTask).post(createTask).delete(deleteAllTask);
router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteSingleTask);

module.exports = router;
