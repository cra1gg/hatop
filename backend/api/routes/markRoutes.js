const express = require("express");

const router = express.Router()
const Mark = require("../models/schemas/markSchema");
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false); // Gets rid of the findOneAndUpdate() deprecated warning.

router.post("/", (req, res) => {
	const mark = new Mark({
		_id: mongoose.Types.ObjectId(req.body.quiz_id),
		courseCode: req.body.courseCode,
		totalMarks: req.body.total_marks,
		name: req.body.name
	});
	mark.save()
		.then(result => {

			res.status(200).json({
				success: "Quiz Completed!"
			});
			return;

		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});

});

module.exports = router;
