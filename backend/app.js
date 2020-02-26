const express = require("express");
const app = express();
const morgan = require("morgan"); //for logging
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const classroom = require('./api/models/classroom');
const classroomRoutes = require("./api/routes/classroomRoutes");
// const quizRoutes = require("./api/routes/quizRoutes");
// const signupRoute = require("./api/routes/signupRoute");

const bcrypt = require('bcrypt')




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
// app.use("/quiz", quizRoutes);


/*app.use( (req, res, next) => {
    res.status(200).json({
        message: "helo"
    });
});*/

// Basic login/signup
const users = []


app.get('/users', (req, res) => {
    res.json(users)
    
})



app.post('/user/signup', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt()
		const pwHash = await bcrypt.hash(req.body.password, 10)

		const user = { name: req.body.name, password: pwHash }
		users.push(user)
		res.status(201).send()

	} catch {
		res.status(500).send()
	}

})


app.post('/user/login', async (req, res) => {
	const user = users.find(user => user.name === req.body.name)
	if (user == null) {
		return res.status(400).send("Can't find this user")
	}

	try {
		if (await bcrypt.compare(req.body.password, user.password)) {
			res.send("Logged in!")
		} else {
			res.send("Failed to login")
		}
	} catch {
		res.status(500).send()

	}

})


module.exports = app;