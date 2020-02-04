const express = require('express');
const app = express()
const http = require('http');
const Sequelize = require('sequelize');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const sequelize = require('./app/models/connection.js');
const Employee = require('./app/models/employee.js');
const EmployeeWorkInfo = require('./app/models/employeeWorkInfo.js');
server.listen(port);


app.use((req,res,next)=>{
    const employee = new Employee({
        employee_id :'234335353',
        first_name :'Adams',
        middle_name :'King',
        last_name :'Contest',
        date_of_birth :'2017-10-01',
        last_modified :'12313131'
    });



    const employeeWork = new EmployeeWorkInfo({
        department :'OG',
        position :'manager',
        date_of_employment :'2017-10-07',
        ogid :'1234567',
        email : 'ex@.com',
        last_modified :'12313131'
    });

    employee.save();
    employeeWork.save();
    res.json({
        mesage:"How u dey Zamfara man ..."
    })
})