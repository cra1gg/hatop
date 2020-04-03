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

            Classroom.findOneAndUpdate({ course_code: req.body.courseCode }, { $push: { quizlets: result._id } }, { new: true }, (err, doc) => {
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


// router.put("/submitQuiz", (req, res) => {
//     var studentId = req.body.username;
//     var quiz_id = req.body.quiz_id;
//     var mark = req.body.mark;
//     var courseCode = req.body.courseCode;

//     // Classroom.findOne({ course_code: courseCode, 'marks.student_id': studentId})
//     // .exec()
//     // .then( doc => {
//     //     console.log(doc);
//     //     res.status(200).json(doc)

//     // })
//     // .catch( err => {
//     //     console.log(err)
//     // });
//     // Classroom.updateOne({ course_code: value, 'marks.student_id' : studentId}, { $push: { 'marks.quizzes': [{ student_id: username, quizzes: [] }] } })// Push an empty quiz array to marks containing the newly added student id
//     //     .then(() => {
//     //         console.log("Updated the marks array");
//     //         res.status(201).json({
//     //             success: `Updated classes of user ${req.body.username} successfully.`
//     //         });
//     //     })
//     // .catch(err => {
//     //     res.status(400).json({ error: "Error: Couldn't add you to class " + value })
//     // });



// });


router.put("/submitQuiz", (req, res) => {
    var studentId = req.body.student_id;
    var student_name = req.body.name;
    var title = req.body.title;
    var courseCode = req.body.courseCode;
    var courseName = req.body.courseName;
    var mark = req.body.mark;
    var max_mark = req.body.max_mark;


    Classroom.findOneAndUpdate({ course_code: courseCode }, { $push: { grades: { student_id: studentId, course_code: courseCode, course_name: courseName, title: title, student_name: student_name, mark: mark, max_mark: max_mark } } }, { new: true }, (err, doc) => {
        if (err || !doc) {
            console.log(err);
            res.status(500).json({
                error: `Couldn't submit the quiz.`
            });
            return;
        }
        console.log(doc);
        res.status(200).json({
            success: "Quiz submitted successfully"
        });
        return;
    });


});




router.get("/:quiz_id", (req, res) => {
    Quiz.findById(mongoose.Types.ObjectId(req.params.quiz_id))
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: 'No valid entry found' });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


router.get("", (req, res) => {
    Quiz.find({})
        .exec()
        .then(docs => {
            if (docs) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({ message: "No Quizzes Available" });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
