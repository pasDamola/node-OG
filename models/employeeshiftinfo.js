'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeShiftInfo = sequelize.define('EmployeeShiftInfo', {
    EmployeeWorkInfoEmployeeId: {
      allowNull: false,
      type: DataTypes.TEXT,
      references : {model : 'EmployeeWorkInfos', key: 'employee_id' }
    },
    works_mondays: {  allowNull: false, type: DataTypes.BOOLEAN },
    monday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    mondays_closing_time: { allowNull: false, type: DataTypes.TIME },
    works_tuesdays: { allowNull: false, type: DataTypes.BOOLEAN},
    tuesday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    tuesdays_closing_time: { allowNull: false, type: DataTypes.TIME },
    works_wednesdays: { allowNull: false, type: DataTypes.BOOLEAN },
    wednesday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    wednesday_closing_time: { allowNull: false, type: DataTypes.TIME },
    works_thursdays: { allowNull: false, type: DataTypes.BOOLEAN },
    thursday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    thursday_closing_time: { allowNull: false, type: DataTypes.TIME },
    works_fridays: { allowNull: false, type: DataTypes.BOOLEAN },
    friday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    friday_closing_time: { allowNull: false, type: DataTypes.TIME },
    works_saturdays: { allowNull: false, type: DataTypes.BOOLEAN },
    saturday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    saturday_closing_time: { allowNull: false, type: DataTypes.TIME },
    works_sundays: { allowNull: false, type: DataTypes.BOOLEAN },
    sunday_resumption_time: { allowNull: false, type: DataTypes.TIME },
    sunday_closing_time: { allowNull: false, type: DataTypes.TIME }
  }, {});
  EmployeeShiftInfo.associate = function(models) {
    // associations can be defined here
    EmployeeShiftInfo.belongsTo(models.EmployeeWorkInfo)
  };
  return EmployeeShiftInfo;
};

