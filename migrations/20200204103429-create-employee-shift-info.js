'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployeeShiftInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeWorkInfoEmployeeId: {
        allowNull: false,
        type: Sequelize.TEXT,
        references : {model : 'EmployeeWorkInfos', key: 'employee_id' }
      },
      works_mondays: {
        type: Sequelize.BOOLEAN
      },
      monday_resumption_time: {
        type: Sequelize.TIME
      },
      mondays_closing_time: {
        type: Sequelize.TIME
      },
      works_tuesdays: {
        type: Sequelize.BOOLEAN
      },
      tuesday_resumption_time: {
        type: Sequelize.TIME
      },
      tuesdays_closing_time: {
        type: Sequelize.TIME
      },
      works_wednesdays: {
        type: Sequelize.BOOLEAN
      },
      wednesday_resumption_time: {
        type: Sequelize.TIME
      },
      wednesday_closing_time: {
        type: Sequelize.TIME
      },
      works_thursdays: {
        type: Sequelize.BOOLEAN
      },
      thursday_resumption_time: {
        type: Sequelize.TIME
      },
      thursday_closing_time: {
        type: Sequelize.TIME
      },
      works_fridays: {
        type: Sequelize.BOOLEAN
      },
      friday_resumption_time: {
        type: Sequelize.TIME
      },
      friday_closing_time: {
        type: Sequelize.TIME
      },
      works_saturdays: {
        type: Sequelize.BOOLEAN
      },
      saturday_resumption_time: {
        type: Sequelize.TIME
      },
      saturday_closing_time: {
        type: Sequelize.TIME
      },
      works_sundays: {
        type: Sequelize.BOOLEAN
      },
      sunday_resumption_time: {
        type: Sequelize.TIME
      },
      sunday_closing_time: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmployeeShiftInfos');
  }
};