const express = require("express");
const app = express();
const morgan = require("morgan"); //for logging
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const classroom = require('./api/models/classroom');
const classroomRoutes = require("./api/routes/classroomRoutes");
const userRoutes = require("./api/routes/userRoutes");
// const quizRoutes = require("./api/routes/quizRoutes");
// const signupRoute = require("./api/routes/signupRoute");
var cors = require('cors')


var mongoose_uri = "mongodb+srv://Shubham:" + encodeURIComponent(process.env.MONGO_ATLAS_PW) + 
									"@hatop-5qek7.mongodb.net/users?retryWrites=true&w=majority"

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



app.use(cors());
// adding headers to prevent CORS errors
// app.use( (req, res, next) => {
// 	// '*' means access to every origin
// 	res.header("Acces-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", 
// 		"Origin, X-Requested-With, Content-Type, Accept, Authorization");

// 	if (req.method === "OPTIONS") {
// 		res.header("Acess-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
// 		return res.status(200).json({});
// 	}
// 	next();
// });

app.use("/classroom", classroomRoutes);
// app.use("/quiz", quizRoutes);

app.use("/user", userRoutes);


module.exports = app;