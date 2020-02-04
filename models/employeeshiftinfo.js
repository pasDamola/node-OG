'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeShiftInfo = sequelize.define('EmployeeShiftInfo', {
    works_modays: DataTypes.BOOLEAN
  }, {});
  EmployeeShiftInfo.associate = function(models) {
    // associations can be defined here
    EmployeeShiftInfo.belongsTo(models.EmployeeWorkInfo)
  };
  return EmployeeShiftInfo;
};

