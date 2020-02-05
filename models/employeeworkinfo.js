'use strict';

const uuid = require('uuid/v4');
const bcryptjs = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const EmployeeWorkInfo = sequelize.define('EmployeeWorkInfo', {
    department: {allowNull: false,type: DataTypes.STRING},
    position: {allowNull: false,type: DataTypes.STRING},
    date_of_employment: {allowNull: false,isDate:true,type: DataTypes.DATEONLY},
    ogid: {type: DataTypes.STRING,unique : true},
    employee_id : {type: DataTypes.TEXT,primaryKey : true},
    email: {allowNull: false,isEmail:true, type: DataTypes.STRING},
    site_location: {allowNull: false,type: DataTypes.STRING},
    last_modified_by: {type: DataTypes.STRING},
    created_by: {type: DataTypes.STRING},
    role: {type: DataTypes.BOOLEAN,allowNull: false},
    account_active: {type: DataTypes.BOOLEAN,allowNull: false},
    account_password: {type: DataTypes.TEXT,allowNull: false}
  }, {});
  EmployeeWorkInfo.beforeCreate((employee,options) => {
    employee.employee_id = uuid();
    employee.email = employee.email.toLowerCase();
    employee.account_password = employee.account_password && employee.account_password != "" ? bcryptjs.hashSync(employee.account_password, 10) : null;
    console.log(employee.account_password);
  });
  EmployeeWorkInfo.associate = function(models) {
    // associations can be defined here
    EmployeeWorkInfo.hasOne(models.EmployeeShiftInfo);
    EmployeeWorkInfo.hasOne(models.EmployeeInfo);
    EmployeeWorkInfo.hasMany(models.EmployeePendingDeduction)
  };
  return EmployeeWorkInfo;
};