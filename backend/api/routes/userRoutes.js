var express     = require('express');
var router      = express.Router();
var bcrypt      = require('bcryptjs')
var mongoose    = require("mongoose");

var User = require('../models/schemas/userSchema');

const users = []



// Left to do: login and check if pw valid => authenticate. Axios to hit endpoints.

router.get('/all', (req, res) => {
    console.log("connected");
    res.json(users)
    
})

router.post('/signup', (req, res) => {
    var password = req.body.password;
    if(password == null || password.length < 4 || password.length > 50) {
        res.status(400).send({ error: "Error: Password must be >=4 characters and <=50 characters." })
        return;
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
                success: `Created user ${req.body.username} successfully.`
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
	var username = req.body.username;
	var password = req.body.password;

	var result = {};
	var userInfo = {'Username': username, 'Password': password};
    console.log(userInfo);
	for(info in userInfo) {
		if(userInfo[info] == null) {
			res.status(400);
			result["error"] = `Error: ${info} is not defined.`;
			res.json(result);
			return;
		}
		if(userInfo[info].length < 4 || userInfo.length > 50) {
			res.status(400);
			result["error"] = `${info} length must be >= 4 characters and <= 50 characters.`;
			res.json(result);
			return;
		}
	}
    
    
    User.find({ username: username})
        .exec()                     // execute query
        .then(doc => {
            if(doc.length) {
                // console.log()
                if (bcrypt.compareSync(password, doc[0].password)) {
                    console.log(doc[0].password);
                    res.status(200).json({
                        success: "Logged in successfully."
                    })
                } else {
                    res.status(409).json({
                        error: "Invalid login credentials."
                    })
                }

            } else {
                res.status(409).json({
                    error: "Invalid login credentials."
                })

            }


            // return 409 error if password is incorrect. or the username doesn't.
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(
                {
                    error: "Server couldn't log you in."
                }
            );
        })





    // var user = users.find(user => user.name === req.body.name)
    // var result = {};
	// if (user == null) {
	// 	return res.status(400).send()
	// }

	// try {
	// 	if (bcrypt.compare(req.body.password, user.password)) {
	// 		res.send("Logged in!")
	// 	} else {
	// 		res.send("Failed to login")
	// 	}
	// } catch {
	// 	res.status(500).send()

	// }

})


module.exports = router;