const express = require("express");
const router = express.Router()
const ClassroomModel = require("../models/classroom");

var classroomModel = new ClassroomModel();

router.put("/", classroomModel.handle_PUT);
router.get("/", classroomModel.handle_GET);


module.exports = router;