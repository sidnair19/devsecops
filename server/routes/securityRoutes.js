const express = require('express');
const router = express.Router();
const securityController = require('../controllers/securityController');

// Perform a security scan
router.post('/scan', securityController.performSecurityScan);

// Get scan results
router.get('/results/:scanId', securityController.getScanResults);

module.exports = router;