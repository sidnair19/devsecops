const express = require('express');
const router = express.Router();
const kubernetes = require('../config/kubernetes');
const deploymentManifest = require('../scripts/deploymentManifest'); // Import your deployment manifest

router.post('/deploy', async (req, res) => {
    try {
        const namespace = req.body.namespace || 'default'; // Namespace from request
        await kubernetes.createNamespace(namespace);
        const response = await kubernetes.deployApplication(namespace, deploymentManifest);
        res.status(200).json({ message: 'Application deployed successfully', data: response });
    } catch (error) {
        res.status(500).json({ message: 'Error deploying application', error });
    }
});

module.exports = router;