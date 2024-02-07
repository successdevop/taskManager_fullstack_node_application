const express = require("express");
const app = express();

// imports required
const database = require("./database/taskdb");
const router = require("./routes/taskRoute");
require("dotenv").config();

// ==> Middle-wares <==
// parse json data
app.use(express.json());
// route router
app.use("/api/v1/tasks", router);

// server listening port
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await database(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
