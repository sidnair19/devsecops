const { exec } = require('child_process');

// Function to execute shell commands
const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${command}`);
                console.error(stderr);
                reject(error);
            } else {
                console.log(stdout);
                resolve(stdout);
            }
        });
    });
};

// Build pipeline script
const buildPipeline = async () => {
    try {
        console.log('Starting build pipeline...');

        // Step 1: Build Docker Image
        console.log('Building Docker image...');
        await executeCommand('docker build -t devsecops-app:latest .');

        // Step 2: Run Tests
        console.log('Running tests...');
        await executeCommand('npm test'); // Replace with your test command

        // Step 3: Push Image to Container Registry
        console.log('Pushing image to container registry...');
        await executeCommand('docker tag devsecops-app:latest your-registry/devsecops-app:latest');
        await executeCommand('docker push your-registry/devsecops-app:latest');

        console.log('Build pipeline completed successfully.');
    } catch (error) {
        console.error('Build pipeline failed:', error);
    }
};

buildPipeline();
