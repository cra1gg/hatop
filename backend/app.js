const express 			= require("express");
const app 				= express();
const morgan 			= require("morgan"); //for logging
const bodyParser 		= require("body-parser");
const mongoose 			= require("mongoose");
const classroom 		= require('./api/models/classroom');
const classroomRoutes 	= require("./api/routes/classroomRoutes");
const userRoutes 		= require("./api/routes/userRoutes");
const cors 				= require('cors');



var mongoose_uri = "mongodb+srv://Shubham:" + encodeURIComponent(process.env.MONGO_ATLAS_PW) + 
									"@hatop-5qek7.mongodb.net/users?retryWrites=true&w=majority"
// const accountRoutes = require("./api/routes/accountRoutes");
const quizRoutes = require("./api/routes/quizRoutes");

var mongoose_options = { useNewUrlParser: true, useUnifiedTopology: true};								
mongoose.connect(mongoose_uri, mongoose_options)
	.then(() => {
		console.log("connected to mongodb");
	})
	.catch(err => {
		console.log("cannot connect to mongodb");
	});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// essentially, morgan will log for us, and then use next()
// to move onto the next middleware
app.use(morgan("dev"))

// extracts json and makes it easily readable for us
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(cors()); // This prevents cors errors without having to set the headers manually.

app.use("/classroom", classroomRoutes);
// app.use("/account", accountRoutes);
app.use("/quiz", quizRoutes);
app.use("/user", userRoutes);


module.exports = app;
