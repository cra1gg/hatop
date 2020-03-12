const mongoose = require("mongoose");

const classroomSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	course_code: {type: String, required: true, unique: true },
	name: { type: String, required: true },
    instructorIds: { type: Array, required: true },
    studentIds: { type: Array, required: true },
	quizlets: {type: Array}
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Classroom", classroomSchema);