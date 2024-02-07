class CustomAPIError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customAPIErrorFunc = (statusCode, message) => {
  return new CustomAPIError(statusCode, message);
};

module.exports = { CustomAPIError, customAPIErrorFunc };
