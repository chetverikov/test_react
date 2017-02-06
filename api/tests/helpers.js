const config = require('../config');
const Locator = require('catberry-locator');
const Logger = require('restocat-logger');
const appErrors = require('../lib/errors');
const sequelize = require('../lib/sequelize');
const EventEmitter = require('events').EventEmitter;

module.exports = {
  getLocatorMock() {
    const locator = new Locator();

    locator.registerInstance('events', new EventEmitter());
    locator.registerInstance('config', config);
    locator.registerInstance('appErrors', appErrors);

    Logger.register(locator);
    sequelize.register(locator);

    return locator;
  }
};
