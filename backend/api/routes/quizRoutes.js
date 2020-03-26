const express = require("express");
const router = express.Router()
const quizController = require("../controllers/quizController"); // TODO fix this import
const mongoose = require("mongoose");
const Quiz = require("../models/schemas/quizSchema")
const QuizQuestion = require("../models/schemas/quizQuestionSchema")


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


ANSWER_FROM_STUDENT = "answer_from_student";
INFO_ABOUT_CLIENT = "info_about_client";
NEXT_QUESTION = "next_question";
END_QUIZ = "end_quiz";

router.get("/start_live_quiz/:class_id/:quiz_id", async (req, res, next) => {
    let questionList = []
    getQuiz = () => Quiz.findOne({_id: quiz_id})
        .exec()
        .then(doc => {
            questionList = doc ? doc : [];
            return questionList;
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    
        
    getQuestion = id => {
        QuizQuestion.findOne({_id: id})
        .exec()
        .then(doc => {
            currQuestion = doc ? doc : [];
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    
    }

    updateStudentMarks

    currQuestionIdx = 0;
    var currQuestionIds = await getQuiz(); //questionList[currQuestionIdx];
    currQuizQuestion = await getQuestion(currQuestionIds[currQuestionIds]);


    //socket.join(roomId);
    
    io.on("connection", socket => {
        // maybe use quizid instead
       // var roomId = generateUniqueId("room", ROOM_ID_LENGTH, totalSocketIORooms);

        // TODO: validation
        // client should join the room for this quiz 
        socket.join(req.quiz_id)

        // should be for user to state their presence
        socket.on(INFO_ABOUT_CLIENT, data => {
            if (data.clientType == "teacher") {
                io.sockets.adapter.rooms[req.quiz_id].peopleList = {
                    teacher: data.clientId,
                    studentList: []
                }  
                socket.join(req.quiz_id);
                io.sockets.adapter.rooms[req.quiz_id].class

            } else if (data.clientType == "student") {
                io.sockets.adapter.rooms[req.quiz_id].peopleList.studentList.push({studentId: data.clientId,
                    correctCount: 0} );
                socket.join(req.quiz_id);
            }
        });

        // should be for when student sends their answer
        socket.on(SENT_FROM_CLIENT, (data) => {
            console.log(data.text);

            if (data.answer == currQuizQuestion.correctAnswers[0]) {
                io.sockets.adapter.rooms[req.quiz_id].peopleList.studentList[data.clientId]["correctCount"] += 1
            }            

        });
    

        socket.on(NEXT_QUESTION, (data, id) => {
            console.log(data.text);
            currQuestionIdx++;
            for (student in io.sockets.adapter.rooms[req.quiz_id].peopleList.studentList) {
                studentList = io.sockets.adapter.rooms[req.quiz_id].peopleList.studentList
                console.log("studentID: " + student["studentId"] + "    score: " + student["correctCount"])
            } 
        });

        // display score i guess? maybe store in db
        socket.on(END_QUIZ, (data, id) => {
            for (student in io.sockets.adapter.rooms[req.quiz_id].peopleList.studentList) {
                studentList = io.sockets.adapter.rooms[req.quiz_id].peopleList.studentList
                console.log("studentID: " + student["studentId"] + "    score: " + student["correctCount"])
            }
        })

        socket.on("disconnect", () => {
            console.log(socket.id)
            console.log("client disconnected");
        });
    
    })
});


// helpers (these should go in quizController or something but that import is yeeting me)



module.exports = router;