const { CustomAPIError } = require("../errors/errorClassHandler");

const customError = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ status: "error", msg: "Something went wrong..." });
};

module.exports = customError;
