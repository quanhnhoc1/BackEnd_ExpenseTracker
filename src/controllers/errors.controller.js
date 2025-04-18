import ApiError from "./api-error.js";

function methodNotAllowed(req, res, next) {
  if (req.route) {
    const httpMethod = Object.keys(req.route.methods)
      .filter((method) => method !== "_all")
      .map((method) => method.toUpperCase());
    return next(new ApiError(405, `Method  not allowed`), {
      Allow: httpMethod.join(","),
    });
  }
  return next();
}
function resourceNotFound(req, res, next) {
  return next(new ApiError("404", `resource not found`));
}

function handleError(error, req, res, next) {
  if (res.handleSent) {
    return next(error);
  }
  return res
    .status(error.statusCode || 500)
    .set(error.headers || {})
    .join({
      message: error.message || "internal Server Error",
    });
}

export default { methodNotAllowed, resourceNotFound, handleError };
