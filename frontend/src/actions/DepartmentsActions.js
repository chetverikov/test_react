const types = require('../constants/ActionTypes');

function addDepartments(name) {
  return {
    type: types.ADD_DEPARTMENTS,
    name
  };
}

function updateDepartments(id) {
  return {
    type: types.UPDATE_DEPARTMENTS,
    id
  };
}

module.exports = {
  addDepartments,
  updateDepartments
}
