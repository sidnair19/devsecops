// server/routes/pipelineRoutes.js
const express = require("express");
const router = express.Router();

const {
  triggerPipeline,
  getPipelineStatus,
} = require("../controllers/pipelineController");

router.post("/trigger", triggerPipeline);
router.get("/status/:pipelineId", getPipelineStatus);

module.exports = router;