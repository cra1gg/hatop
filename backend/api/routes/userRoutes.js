var express     = require('express');
var router      = express.Router();
var bcrypt      = require('bcryptjs')
var mongoose    = require("mongoose");
// var db          = mongoose.connection;

var User = require('../models/schemas/userSchema');

const users = []

/**
 * Constants for input validation.
 */
const MIN_LENGTH_INPUT = 4;
const MAX_LENGTH_INPUT = 50;



router.get('/all', (req, res) => {
    console.log("connected");
    res.json(users)
    
})

router.post('/signup', (req, res) => {
    var user = { name: req.body.name, password: pwHash }
    // backend validation





    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        //rest of the parameters to be set
        
    })
    user.save();
    res.status(201).json({
        message: "Created the user successfully.",
        user: user
    })

    

    var salt = bcrypt.genSaltSync(10);
    var pwHash = bcrypt.hashSync(req.body.password, salt);

    users.push(user)
    res.status(201).send()
})


router.post('/login', (req, res) => {
    var user = users.find(user => user.name === req.body.name)
    var result = {};
	if (user == null) {
		return res.status(400).send()
	}

	try {
		if (bcrypt.compare(req.body.password, user.password)) {
			res.send("Logged in!")
		} else {
			res.send("Failed to login")
		}
	} catch {
		res.status(500).send()

	}

})


module.exports = router;