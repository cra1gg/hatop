const mongoose = require("mongoose");
const Quiz = require("../models/schemas/quizSchema")


//function handle_GET(req, res, next) {

//}

function handle_PUT(req, res, next) {
    const quiz = new Quiz({
        _id: new mongoose.Types.ObjectId(),
        courseCode: req.body.courseCode,
        name: req.body.name,
        questions: req.body.questions,
        dateCreated: new Date()
    });
    quiz.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Handling PUT request to /quizController",
                createdQuiz: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

