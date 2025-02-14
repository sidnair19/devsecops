const express = require('express');
const router = express.Router();
const pipelineController = require('../controllers/pipelineController');

// Trigger a pipeline
router.post('/trigger', pipelineController.triggerPipeline);

// Get pipeline logs
router.get('/logs/:pipelineId', pipelineController.getPipelineLogs);

module.exports = router;