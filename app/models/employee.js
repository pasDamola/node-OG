const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('./connection.js');
class Employee extends Model {}

Employee.init({
  employee_id: { type: Sequelize.TEXT, allowNull: false },
  first_name: { type: Sequelize.STRING, allowNull: false },
  middle_name: {type: Sequelize.STRING},
  last_name: {type: Sequelize.STRING, allowNull: false },
  date_of_birth: {type: Sequelize.DATEONLY, allowNull: false},
  last_modified: { type: Sequelize.STRING, allowNull: false },
}, {sequelize, modelName: 'employee_info'});

module.exports = Employee;