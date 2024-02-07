const customError = (err, req, res, next) => {
  res.status(500).json({ status: "error", msg: "Something went wrong..." });
};

module.exports = customError;
