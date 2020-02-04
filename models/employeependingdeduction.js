'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeePendingDeduction = sequelize.define('EmployeePendingDeduction', {
    description: DataTypes.STRING
  }, {});
  EmployeePendingDeduction.associate = function(models) {
    // associations can be defined here
    EmployeePendingDeduction.belongsTo(models.EmployeeWorkInfo)
  };
  return EmployeePendingDeduction;
};