const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true); // Used to silence the error: "(node:25555) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead." because of unique key.

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	first_name: { type: String, required: true, minlength: 4, maxlength: 255 },
    last_name:  { type: String, required: true, minlength: 4, maxlength: 255 },
    email:      { type: String, required: true, minlength: 4, maxlength: 255 },
    username:   { type: String, required: true, minlength: 4, maxlength: 255, unique: true }, // "Primary key" for schema
    password:   { type: String, required: true, minlength: 4, maxlength: 255 }
});

module.exports = mongoose.model("User", userSchema);