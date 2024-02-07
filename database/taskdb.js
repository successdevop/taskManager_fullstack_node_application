const mongoose = require("mongoose");

function database(url) {
  return mongoose.connect(url);
}

module.exports = database;
