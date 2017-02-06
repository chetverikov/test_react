const Sequelize = require('sequelize');

module.exports = sequelize => {
  sequelize.define('department', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    }
  });
};
