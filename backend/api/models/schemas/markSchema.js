const mongoose = require("mongoose");

const markSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseCode: { type: String, required: true },
    name: { type: String, required: true },
    totalMarks: { type: Number, required: true }  // length of questions array = total marks

});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("mark", markSchema);
