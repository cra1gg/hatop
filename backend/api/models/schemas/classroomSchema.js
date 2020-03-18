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
		mark: { type: Number, required: true, unique: true }
	}]
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Classroom", classroomSchema);