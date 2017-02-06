
class BaseService {
  constructor(locator, model) {
    if (!locator) {
      throw new TypeError('Locator should be passed to service');
    }

    if (!model) {
      throw new TypeError('Model should be passed to service');
    }

    this.locator = locator;
    this.appErrors = locator.resolve('appErrors');
    this.model = model;
  }

  findById(...args) {
    return this.model
      .findById(...args)
      .then(entity => {
        if (!entity) {
          throw new this.appErrors.NotFoundError();
        }

        return entity;
      });
  }

  findAll(...args) {
    return this.model.findAll(...args);
  }

  create(...args) {
    return this.model.create(...args);
  }

  update(id, ...args) {
    return this.findById(id)
      .then(entity => entity.update(...args));
  }

  delete(id, ...args) {
    return this.findById(id)
      .then(entity => entity.destroy(...args));
  }
}

module.exports = BaseService;

