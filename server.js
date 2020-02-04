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
    //     ogid :'2981',
    //     employee_id :'2020',
    //     email : 'ex@.com',
    //     last_modified_by :'12313131',
    //     role:true,
    //     created_by: 'Ben Carson',
    //     account_active:true,
    //     site_location:'Outsource Global',
    //     account_password:'34rwe3232dfdfd'
    // });
    // const employee = new db.EmployeeInfo({
    //     EmployeeWorkInfoEmployeeId :'2020',
    //     first_name :'Adams',
    //     middle_name :'King',
    //     last_name :'Contest',
    //     date_of_birth :'2017-10-01',
    //     last_modified_by :'12313131'
    // });
    
    // employeeWork.save()
    // .then(()=>{
    //     console.log("Record Created For ",employeeWork.department );
    //     employee.save();
    // })
    // .catch(function(err) {
    //     //console.log(err);
    // });

db.EmployeeWorkInfo.findAll({include:[{model: db.EmployeeInfo}] })
    .then((employeeWork)=>{
        res.json(employeeWork);
    })
    .catch(function(err) {
        console.log(err);
    });
   
    
})