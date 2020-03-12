const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
	dateCreated: { type: Date, required: true },
});


// (name of model, schema for model)
// mongoose.model is what actually creates the model
module.exports = mongoose.model("Account", accountSchema);