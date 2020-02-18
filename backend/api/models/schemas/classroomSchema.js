const mongoose = require("mongoose");

const classroomSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
    instructorIds: { type: Array, required: true },
    studentIds: { type: Array, required: true },
	dateCreated: { type: Date, required: true },
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Classroom", classroomSchema);