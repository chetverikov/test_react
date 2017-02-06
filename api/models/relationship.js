module.exports = sequelize => {
  const Department = sequelize.model('department');
  const Employee = sequelize.model('employee');

  Employee.belongsTo(Department, {foreignKey: 'departmentId'});
};
