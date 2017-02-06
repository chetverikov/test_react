class Index {

  /**
   * Handle for "GET /" endpoint
   * 
   * @returns {Object} Response content
   */
  list() {
    return {
      '/': 'Index collection',
      '/employees': 'Collection of employees',
      '/departments': 'Collection of departments'
    }
  }
}

module.exports = Index;
