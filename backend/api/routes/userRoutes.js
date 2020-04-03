var express     = require('express');
var router      = express.Router();
var bcrypt      = require('bcryptjs')
var mongoose    = require("mongoose");
var jwt 		= require('jsonwebtoken');


var User = require('../models/schemas/userSchema');
const Classroom = require("../models/schemas/classroomSchema");

router.get('/:user_id', (req, res) => {
    const id = req.params.user_id;
    User.findOne({ username: id})
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: 'No valid entry found'});
            };       
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
})

router.post('/signup', (req, res) => {
    // console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var user_type = req.body.user_type;
	var result = {};
	var userInfo = {'Username': username, 'Password': password, 'First name': first_name, 'Last name': last_name, 'email': email, 'user_type': user_type};
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
    

    
    console.log(req.body);
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
        password: pwHash,
        user_type: req.body.user_type
        
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
            if(err === "user_type") {
                res.status(400).json(
                    {
                        error: `The usertype must be either instructor or student. It cannot be ${req.body.user_type}.`
                    })
                    return;

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
    console.log(req.body);

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
    
    User.findOne({ username: username})
        .exec()                     // execute query
        .then(doc => {
            if(doc) {
                if (bcrypt.compareSync(password, doc.password)) {
                    console.log(doc.password);
                    let user = {name: username};

                    let accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                    console.log(accessToken);
                    console.log(doc);
                    res.status(200).json({
                        success: "Logged in successfully.",
                        accessToken: accessToken,
                        user_info: doc
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


        })
        .catch(err => {
            console.log(err);
            res.status(500).json(
                {
                    error: "Server couldn't log you in."
                }
            );
        })

})

router.post('/enrolclass', (req, res) => {
    console.log(req.body);
    var username = req.body.username;
    var value = req.body.value;

	var result = {};
	var userInfo = {'Username': username, 'Value': value};
    console.log(userInfo);
	for(info in userInfo) {
		if(userInfo[info] == null) {
			res.status(400);
			result["error"] = `Error: ${info} is not defined.`;
			res.json(result);
			return;
		}
	}
    

    Classroom.findOne({course_code: value})
        .exec()
        .then(doc => {
            if (doc) {
                User.updateOne({username: username}, {$push: {classes: value}})
                .then(result => {
                    res.status(201).json({
                        success: `Updated classes of user ${req.body.username} successfully.`
                    });
                })
                .catch(err => {
                    res.status(400).json({error: "Error: Couldn't add you to class " + value}) 
                });
            } else {
                res.status(404).json({error: 'No class id found'});
            };       
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'No class id found'});
        });

})



// router.get('/test/g', isValidToken, (req, res) => {
//     res.json({"hello": "you have access"});
// })


/**
 * Let the user go through the route iff the presented token is valid.
 */
function isValidToken(req, res, next) {
	let authHeader = req.headers['authorization'];
	let token = authHeader && authHeader.split(' ')[1]; // Format.... BEARER <Token>
	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if(err) return res.sendStatus(403);
		req.user = user;
		console.log(user);
		next();
	})
}





module.exports = router;