const express = require("express");
const { createAccount } = require("../Controller/userController");

const router = express.Router()


router.post("/createAccount",createAccount)


 


module.exports = router;