const express = require('express');
const app = express();
const morgan = require('morgan');

const  { mongoose } = require('./database');

//settings

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(morgan('dev'));
app.use(express.json());



//routes

app.use(require('./routes/employee.routes.js'));

//starting the server

app.listen(app.get('port'), () =>{
	console.log("server on port 3000");
});