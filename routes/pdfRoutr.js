const express = require("express");
const router = express.Router();
const pdfCtrl = require("../controllers/pdfController");

router.post("/createPdf", pdfCtrl.createPdf);

router.post("/sendPdf", pdfCtrl.sendPdf);

module.exports = router;
