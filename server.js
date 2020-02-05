const express = require('express');
const app = express()
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const db = require('./models/index.js');
server.listen(port);


app.use((req,res,next)=>{
    // const employeeWork = new db.EmployeeWorkInfo({
    //     department :'OG',
    //     position :'manager',
    //     date_of_employment :'2017-10-07',
    //     ogid :'0009090',
    //     email : 'EXYOOYYAMPLE@.com',
    //     last_modified_by :'12313131',
    //     role:true,
    //     created_by: 'Ben Carson',
    //     account_active:true,
    //     site_location:'Outsource Global',
    //     account_password:'34rwe3232dfdfd'
    // });
   

    // employeeWork.save()
    // .then(()=>{
    //     console.log("Record Created For ",employeeWork.department );
    //     const employee = new db.EmployeeInfo({
    //         EmployeeWorkInfoEmployeeId :employeeWork.employee_id,
    //         first_name :'Adams',
    //         middle_name :'King',
    //         last_name :'Contest',
    //         date_of_birth :'2017-10-01'
    //     });
    //     employee.save();
    // })
    // .catch(function(err) {
    //     //console.log(err);
    // });

db.EmployeeWorkInfo.findAll({include:[{model: db.EmployeeInfo}] })
    .then((employeeTest)=>{
        res.json(employeeTest);
    })
    .catch(function(err) {
        console.log(err);
    });
})