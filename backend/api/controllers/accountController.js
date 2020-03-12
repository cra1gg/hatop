const mongoose = require("mongoose");

const Account = require('../models/schemas/accountSchema');

/* account related db queries go here */
function handle_GET(req, res, next) {
    res.statue(200).json({
        message: 'Handling GET requests to /accountController'
    });
};

function handle_PUT(req, res, next) {
    const account = new Account ({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateCreated: req.body.dateCreated
    });
    account
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling PUT requests to /accountController',
                createdAccount: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    res.status(201).json({
        message: 'Handling PUT requests to /accountController',
        createdAccount: account
    });
};