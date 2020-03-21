const express = require("express");
const router = express.Router()
const ClassroomModel = require("../controllers/classroomController");

//var classroomModel = new ClassroomModel();

router.put("/", (req, res) => {
    ClassroomModel.handle_PUT(req, res)
});
router.get("/:classroom_id", (req, res) => {
    ClassroomModel.handle_GET_class(req, res)
});

module.exports = router;