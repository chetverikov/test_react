
class ApplicationError extends Error {}

class NotFoundError extends ApplicationError {}

module.exports = {
  ApplicationError,
  NotFoundError
};
