const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()
const Classroom = require("../models/schemas/classroomSchema");

//var classroomModel = new ClassroomModel();

router.put("/", (req, res) => {
    console.log(req);
    const classroom = new Classroom({
        _id: new mongoose.Types.ObjectId(),
        course_code: req.body.courseCode,
        name: req.body.name,
        instructor_ids: req.body.instructor_ids,
        student_ids: req.body.student_ids,
        quizlets: req.body.quizlets,
        marks: req.body.marks
    });
    classroom.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Handling PUT request to /classroomController",
                createdClassroom: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
router.get("/:classroom_id", (req, res) => {
    const id = req.params.classroom_id;
    Classroom.findOne({course_code: id})
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