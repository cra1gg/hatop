const User = require('../models/schemas/userSchema');


function handle_PUT(req, res, next) {
    const user = new User ({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        dateCreated: req.body.dateCreated
    });
    User
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling PUT requests to /userController',
                createdAccount: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}