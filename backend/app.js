const express = require("express");
const app = express();
const morgan = require("morgan"); //for logging
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const classroom = require('./api/models/classroom');
const classroomRoutes = require("./api/routes/classroomRoutes");
const accountRoutes = require("./api/routes/accountRoutes");
const quizRoutes = require("./api/routes/quizRoutes");

var mongoose_uri = "mongodb+srv://avocado:" + encodeURIComponent(process.env.MONGO_ATLAS_PW) + 
									"@cluster0-sbtzz.mongodb.net/test?retryWrites=true&w=majority"

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

// adding headers to prevent CORS errors
app.use( (req, res, next) => {
	// '*' means access to every origin
	res.header("Acces-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", 
		"Origin, X-Requested-With, Content-Type, Accept, Authorization");

	if (req.method === "OPTIONS") {
		res.header("Acess-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

app.use("/classroom", classroomRoutes);
app.use("/account", accountRoutes);
app.use("/quiz", quizRoutes);


/*app.use( (req, res, next) => {
    res.status(200).json({
        message: "helo"
    });
});*/


module.exports = app;