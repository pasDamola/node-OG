'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeePendingDeduction = sequelize.define('EmployeePendingDeduction', {
    EmployeeWorkInfoEmployeeId: {
      allowNull: false,type: DataTypes.TEXT,
      references : {model : 'EmployeeWorkInfo', key: 'employee_id' }
    },
  status: {allowNull: false,type: DataTypes.BOOLEAN},
  amount: {allowNull:false,type: DataTypes.DECIMAL},
  description: {allowNull:false, type:DataTypes.STRING},
  deduction_date: {allowNull:false, type:DataTypes.DATEONLY}
  }, {});
  EmployeePendingDeduction.associate = function(models) {
    // associations can be defined here
    EmployeePendingDeduction.belongsTo(models.EmployeeWorkInfo)
  };
  return EmployeePendingDeduction;
};