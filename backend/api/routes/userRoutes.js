var express     = require('express');
var router      = express.Router();
var bcrypt      = require('bcryptjs')
var mongoose    = require("mongoose");

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
    var password = req.body.password;
    if(password == null || password.length < 4 || password.length > 50) {
        res.status(400).send({ error: "Error: Password must be >=4 characters and <=50 characters." })
    }

	var salt = bcrypt.genSaltSync(10);
	var pwHash = bcrypt.hashSync(password, salt);


    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: pwHash
        
    })
    user.save()
        .then(result => {
            res.status(201).json({
                success: "Created user ${req.body.username} successfully."
            })
        })
        .catch(err => {
            var errorString = ''
            for(err in err.errors) {
                errorString += err + ", ";
            }

            if(err['code'] = 1100) { //Error code for duplicate username.
                res.status(400).json(
                    {
                        error: `The username ${req.body.username} is already being used. Try another one.`
                    }
                )
                return;
            }
            if (errorString.length > 0) {
                errorString = errorString.substring(0, errorString.length - 2)
            }

            res.status(400).json(
                {
                    error: `The field(s) ${errorString} are required and must be >=4 characters and <=50 characters.`
                }
            )

        })    
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