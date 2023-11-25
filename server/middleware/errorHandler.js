const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  let error = { ...err };
  error.message = err.message;

  if (error.kind === "ObjectId") {
    const message = `Product with id ${err.value} was not found`;
    error = new ErrorResponse(message, 404);
  }

  if (error.code === 11000 && error.keyPattern && error.keyValue) {
    const duplicateKey = Object.keys(error.keyPattern)[0];
    const duplicateValue = error.keyValue[duplicateKey];
    const message = `Duplicate key error: The ${duplicateKey} '${duplicateValue}' already exists.`;
    error = new ErrorResponse(message, 409);
  }

  
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
