const { exec } = require('child_process');

const scanImages = async () => {
    try {
        console.log('Starting vulnerability scan for container images...');

        // Step 1: Pull the latest image
        console.log('Pulling the latest Docker image...');
        await executeCommand('docker pull your-registry/devsecops-app:latest');

        // Step 2: Scan Image with Trivy
        console.log('Scanning image for vulnerabilities...');
        await executeCommand('trivy image your-registry/devsecops-app:latest');

        // Step 3: Output Scan Results
        console.log('Vulnerability scan completed. Check the above results for details.');
    } catch (error) {
        console.error('Vulnerability scanning failed:', error);
    }
};

scanImages();