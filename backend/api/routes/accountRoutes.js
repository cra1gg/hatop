const express = require("express");
const router = express.Router()
const Account = require("../controllers/accountController");

var account = new Account();

router.put("/", account.handle_PUT);
router.get("/", account.handle_GET);


module.exports = router;