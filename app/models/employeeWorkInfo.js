const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('./connection.js');
const Employee = require('./employee.js')
class EmployeeWorkInfo extends Model {}

EmployeeWorkInfo.init({
  department : { type: Sequelize.STRING, allowNull: false },
  position: {type: Sequelize.STRING},
  date_of_employment: {type: Sequelize.DATE, allowNull: false },
  ogid: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allowNull: false},
  last_modified: { type: Sequelize.STRING, allowNull: false },
//   employee_id: {
//     type: Sequelize.TEXT,
//     references: {
//       model: Employee,
//       key: 'employee_id'
//     }
//   }
}, {sequelize, modelName: 'employee_work_info'});



module.exports = EmployeeWorkInfo;