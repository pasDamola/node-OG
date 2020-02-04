const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('og_bas_db_main', 'postgres', 'phpandjs', {
  host: 'localhost',
  dialect:  'postgres' 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
sequelize.sync({ force: false });

module.exports = sequelize;

// const Sequelize = require('sequelize')
// const EmployeeModel = require('./app/models/employee')
// const EmployeeWorkInfoModel = require('./app/models/employeeWorkInfo')

// const sequelize = new Sequelize('og_bas_db_main', 'postgres', 'phpandjs', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// const Employee = EmployeeModel(sequelize, Sequelize)
// const EmployeeWorkInfo = EmployeeWorkInfoModel(sequelize, Sequelize)

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

// module.exports = {Employee,EmployeeWorkInfo}