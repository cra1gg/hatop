const express = require("express");
const router = express.Router()
const Quiz = require("../models/schemas/quizSchema");
const mongoose = require("mongoose");
const Classroom = require("../models/schemas/classroomSchema");

mongoose.set('useFindAndModify', false); // Gets rid of the findOneAndUpdate() deprecated warning.

router.put("/", (req, res) => {
    const quiz = new Quiz({
        _id: new mongoose.Types.ObjectId(),
        courseCode: req.body.courseCode,
        name: req.body.name,
        questions: req.body.questions,
        totalMarks: req.body.questions.length,
    });
    quiz.save()
        .then(result => {
            // Now add it to the class 
            console.log(result); //quiz that was just added.
            
            Classroom.findOneAndUpdate({course_code: req.body.courseCode}, {$push:{quizlets: result._id}}, {new: true}, (err, doc) => {
                if (err || !doc) {
                    console.log(err);
                    res.status(500).json({
                        error: err,
                        message: `${req.body.courseCode} doesn't exist.`
                    });
                    return;
                }
            
                res.status(200).json({
                    success: "Quiz added successfully"
                });
                return;
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get("/:quiz_id", (req, res) => {
    Quiz.findById(req.params.quiz_id)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: 'No valid entry found'});
            };       
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});










module.exports = router;