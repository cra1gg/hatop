const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseCode: { type: String, required: true },
	name: { type: String, required: true },
    questions: [{ 
        id: { type: String, required: true },
        type: { type: String, required: true },
        content: { type: String, required: true },
        answer: { type: String, required: true }
     }],
	dateCreated: { type: Date, required: true },
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Quiz", quizSchema);