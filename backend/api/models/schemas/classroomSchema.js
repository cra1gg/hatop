const mongoose = require("mongoose");

const classroomSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	course_code: { type: String, required: true, unique: true },
	name: { type: String, required: true },
    instructor_ids: { type: Array, required: true },
    student_ids: { type: Array, required: true },
	quizlets: { type: Array },
	marks: [{
		student_id: { type: String, required: true, unique: true },
		student_name: { type: String, required: true },
		title: { type: String, required: true },
		mark: { type: Number, required: true },
		max_mark: { type: Number, required: true }
	}]
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Classroom", classroomSchema);