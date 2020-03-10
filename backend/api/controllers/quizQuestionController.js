  const mongoose = require("mongoose");
const QuizQuestion = require("../models/schemas/quizQuestionSchema")
const Quiz = require("../models/schemas/quizSchema")



function handle_PUT(req, res, next) {
    const quizQuestion = new QuizQuestion({
        _id: new mongoose.Types.ObjectId(),
        quizId: req.body.quizId,
        name: req.body.name,
        question: req.body.question,
        answerOptions: req.body.answerOptions,
        correctAnswers: req.body.correctAnswers,
        dateCreated: new Date()
    });
    quizQuestion.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Handling PUT request to /quizController",
                createdQuizQuestion: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    Quiz.findById(req.body.quizId)
    .then(quiz => {
        if (!quiz) {
			return res.status(404).json({
				message: "quiz not found"
			});
        }
        
        /*TODO: use other way*/
        Quiz.update({_id: req.body.quizId, document, (err, res) => {

        });
    });
};