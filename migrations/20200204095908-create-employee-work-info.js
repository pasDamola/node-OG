'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployeeWorkInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      department: {
        allowNull: false,
        type: Sequelize.STRING
      },
      position: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date_of_employment: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      ogid: {
        type: Sequelize.STRING,
        unique : true
      },
      employee_id : {
        type: Sequelize.TEXT,
        primaryKey : true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      site_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_modified_by: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      account_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      account_password: {
        type: Sequelize.TEXT,
        allowNull: false
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
    return queryInterface.dropTable('EmployeeWorkInfos');
  }
};