const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true); // Used to silence the error: "(node:25555) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead." because of unique key.

/**
 * Constants for input validation.
 */
const MIN_LENGTH_INPUT = 4;
const MAX_LENGTH_INPUT = 255;

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	first_name: { type: String, required: true, minlength: MIN_LENGTH_INPUT, maxlength: MAX_LENGTH_INPUT },
    last_name:  { type: String, required: true, minlength: MIN_LENGTH_INPUT, maxlength: MAX_LENGTH_INPUT },
    email:      { type: String, required: true, minlength: MIN_LENGTH_INPUT, maxlength: MAX_LENGTH_INPUT },
    username:   { type: String, required: true, minlength: MIN_LENGTH_INPUT, maxlength: MAX_LENGTH_INPUT, unique: true }, // "Primary key" for schema
    password:   { type: String, required: true, minlength: MIN_LENGTH_INPUT, maxlength: MAX_LENGTH_INPUT },
    classes:    [],
    user_type:  { type: String, enum : ["student", "instructor"], required:true}
});

module.exports = mongoose.model("User", userSchema);