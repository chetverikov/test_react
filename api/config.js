module.exports = {
  isRelease: false,
  server: {
    port: 3001
  },
  sequelize: {
    database: 'test',
    username: 'root',
    password: '',
    options: {
      logging: false
    }
  }
};
