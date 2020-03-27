const mongoose = require("mongoose");

const quizQuestionSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
    quizId: { type: String, required: true },
    question: { type: String, required: true },
    answerOptions: { type: Array, required: true },
    correctAnswer: { type: String, required: true },
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("QuizQuestion", quizQuestionSchema);