const Sequelize = require('sequelize');

module.exports = sequelize => {
  sequelize.define('employee', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    departmentId: {
      type: Sequelize.INTEGER
    }
  });
};
