const mongoose = require("mongoose");
const Classroom = require("../models/schemas/classroomSchema")


//function handle_GET(req, res, next) {

//}

function handle_PUT(req, res, next) {
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
};

