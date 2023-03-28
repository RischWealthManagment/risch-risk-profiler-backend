const express = require("express");
const router = express.Router();
const leadCtrl = require("../controllers/LeadCrontroler");

router.post("/register", leadCtrl.addLead);

module.exports = router;
