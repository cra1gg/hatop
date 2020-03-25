const express = require("express");
const router = express.Router()
const quizController = require("../controllers/quizController"); // TODO fix this import
const mongoose = require("mongoose");
const Quiz = require("../models/schemas/quizSchema")


//router.put("/", quizController.handle_PUT);

router.put("/", (req, res, next) => {
    const quiz = new Quiz({
        _id: new mongoose.Types.ObjectId(),
        courseCode: req.body.courseCode,
        name: req.body.name,
        questions: req.body.questions,
        dateCreated: new Date()
    });
    quiz.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Handling PUT request to /quizController",
                createdQuiz: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


SENT_FROM_CLIENT = "sent from client";
NEXT_QUESTION = "next_question";

router.get("/start_quiz/:quiz_id", (req, res, next) => {
    let questionList = []
    Quiz.findOne({_id: quiz_id})
        .exec()
        .then(doc => {
            questionList = doc ? doc : [];
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    
    socket.join(roomId);
    currQuestionIdx = 0;
    io.on("connection", socket => {
        // maybe use quizid instead
        var roomId = generateUniqueId("room", ROOM_ID_LENGTH, totalSocketIORooms);
        var currQuestion = questionList[currQuestionIdx];
        currQuestionIdx++;

        // should be for when student sends their answer
        socket.on(SENT_FROM_CLIENT, (data, id) => {
            console.log(data.text);
            

        });
    

        socket.on(NEXT_QUESTION, (data, id) => {
            console.log(data.text);
        });
        
    
    })
});


// helpers (these should go in quizController or something but that import is yeeting me)



module.exports = router;