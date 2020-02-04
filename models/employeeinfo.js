'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeInfo = sequelize.define('EmployeeInfo', {
    EmployeeWorkInfoEmployeeId: {
      allowNull: false,type: DataTypes.TEXT,
      references : {model : 'EmployeeWorkInfo', key: 'employee_id' }
    },
  first_name: {allowNull: false,type: DataTypes.STRING},
  middle_name: {type: DataTypes.STRING},
  last_name: {allowNull: false,type: DataTypes.STRING},
  date_of_birth: {allowNull: false,type: DataTypes.DATEONLY},
  last_modified_by: {allowNull: false,type: DataTypes.STRING}
  }, {});
  EmployeeInfo.associate = function(models) {
    // associations can be defined here
    EmployeeInfo.belongsTo(models.EmployeeWorkInfo)
  };
  return EmployeeInfo;
};