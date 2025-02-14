// server/routes/securityRoutes.js
const express = require("express");
const router = express.Router();
const { scanContainerImage } = require("../controllers/securityController");

router.post("/scan", scanContainerImage);

module.exports = router;