const express = require("express");
const router = express.Router()
const quizController = require("../controllers/quizController");

router.put("/", quizController.handle_PUT);
//router.get("/", quizController.handle_GET);

module.exports = router;