const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	course_code: { type: String, required: true, unique: true },
	name: { type: String, required: true },
    instructor_ids: { type: Array, required: true },
	quizlets: { type: Array },
	marks: [{
		student_id: { type: String, required: true},				// Aggregate over the student_id's to find all the tests the user has taken.
		quizzes: [{
			quiz_id: {type: String, required: true},
			mark: {type: Number, required: true}
		}]
	}]
});



// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Classroom", classSchema);