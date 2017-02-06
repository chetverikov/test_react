const Sequelize = require('sequelize');

module.exports = {
  register(locator) {
    const config = locator.resolve('config').sequelize || null;
    const logger = locator.resolve('logger');
    const args = [];

    if (!config) {
      throw new TypeError('Not set Sequelize config!');
    }

    if (typeof config === 'string') {
      args.push(config);
    }

    if (typeof config === 'object' && config !== null) {
      if (typeof config.database !== 'string') {
        throw new TypeError('Not set database into Sequelize config!');
      }

      if (typeof config.username !== 'string') {
        throw new TypeError('Not set username into Sequelize config!');
      }

      if (typeof config.password !== 'string') {
        throw new TypeError('Not set password into Sequelize config!');
      }

      args.push(config.database, config.username, config.password, config.options);
    }

    const sequelize = new Sequelize(...args);

    require('./../models/Department')(sequelize);
    require('./../models/Employee')(sequelize);
    require('./../models/relationship')(sequelize);

    locator.registerInstance('sequelize', sequelize);

    return sequelize;
  }
};
