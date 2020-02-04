'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeWorkInfo = sequelize.define('EmployeeWorkInfo', {
    department: {allowNull: false,type: DataTypes.STRING},
    position: {allowNull: false,type: DataTypes.STRING},
    date_of_employment: {allowNull: false,type: DataTypes.DATEONLY},
    ogid: {type: DataTypes.STRING,unique : true},
    employee_id : {type: DataTypes.TEXT,primaryKey : true},
    email: {allowNull: false,type: DataTypes.STRING},
    site_location: {allowNull: false,type: DataTypes.STRING},
    last_modified_by: {type: DataTypes.STRING},
    created_by: {type: DataTypes.STRING},
    role: {type: DataTypes.BOOLEAN,allowNull: false},
    account_active: {type: DataTypes.BOOLEAN,allowNull: false},
    account_password: {type: DataTypes.TEXT,allowNull: false}
  }, {});
  EmployeeWorkInfo.associate = function(models) {
    // associations can be defined here
    EmployeeWorkInfo.hasOne(models.EmployeeShiftInfo);
    EmployeeWorkInfo.hasOne(models.EmployeeInfo);
    EmployeeWorkInfo.hasMany(models.EmployeePendingDeduction)
  };
  return EmployeeWorkInfo;
};