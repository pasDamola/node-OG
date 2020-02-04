'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployeePendingDeductions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      last_modified_by: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employee_id: {
        allowNull: false,
        type: Sequelize.TEXT,
        references : {model : 'EmployeeWorkInfos', key: 'employee_id' }
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
    return queryInterface.dropTable('EmployeePendingDeductions');
  }
};