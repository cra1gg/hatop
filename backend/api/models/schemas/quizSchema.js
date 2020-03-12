const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseCode: { type: String, required: true },
	name: { type: String, required: true },
    questions: [{ 
        quiz_question_id: { type: String, required: true },
        user_id: { type: String},
        student_answer: { type: String}
     }],
	dateCreated: { type: Date, required: true },
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Quiz", quizSchema);