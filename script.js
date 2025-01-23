var isDate = function (input) {
  // Check if input is a Date object
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // Check if input can be converted to a valid Date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // Additional check for stringified Date objects
  if (Object.prototype.toString.call(input) === "[object String]") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // Return false for all other cases
  return false;
};
