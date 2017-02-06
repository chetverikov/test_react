class BaseCollection {

  constructor(locator, service) {
    this.logger = locator.resolve('logger');
    this.service = service;
  }

  /**
   * Handle for "GET /:id" endpoint
   *
   * @returns {Object} Response content
   */
  one() {
    const id = this.$context.state.id;

    return this.service.findById(id);
  }

  /**
   * Handle for "GET /" endpoint
   *
   * @returns {Object} Response content
   */
  list() {
    return this.service.findAll({limit: 10});
  }

  /**
   * Handle for "POST /" endpoint
   *
   * @returns {Object} Response content
   */
  create() {
    const body = this.$context.request.body;

    return this.service.create(body).then(department => {
      this.$context.response.setStatus(201);

      return department;
    });
  }

  /**
   * Handle for PUT "/:id" endpoint
   *
   * @returns {Object} Response content
   */
  update() {
    const id = this.$context.state.id;
    const body = this.$context.request.body;

    return this.service.update(id, body);
  }

  /**
   * Handle for DELETE "/:id"
   *
   * @returns {Object} Response content
   */
  delete() {
    const id = this.$context.state.id;

    return this.service.delete(id);
  }
}

module.exports = BaseCollection;
