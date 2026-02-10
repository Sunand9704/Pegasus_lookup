const { ApiError } = require("../utils/api-error");

const notFoundHandler = (req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
};

const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";

  if (process.env.NODE_ENV !== "production") {
    console.error(error);
  }

  const responseBody = {
    success: false,
    message,
  };

  if (error.details) {
    responseBody.details = error.details;
  }

  res.status(statusCode).json(responseBody);
};

module.exports = { notFoundHandler, errorHandler };
