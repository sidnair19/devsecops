const { exec } = require('child_process');

const deployCluster = async () => {
    try {
        console.log('Starting Kubernetes cluster deployment...');

        // Step 1: Apply Kubernetes configurations
        console.log('Applying Kubernetes manifests...');
        await executeCommand('kubectl apply -f k8s/deployment.yaml');
        await executeCommand('kubectl apply -f k8s/service.yaml');

        // Step 2: Verify Pods Status
        console.log('Checking pod status...');
        await executeCommand('kubectl get pods');

        // Step 3: Set up Autoscaling
        console.log('Setting up autoscaling...');
        await executeCommand('kubectl autoscale deployment devsecops-deployment --cpu-percent=50 --min=1 --max=10');

        console.log('Kubernetes cluster deployment completed successfully.');
    } catch (error) {
        console.error('Cluster deployment failed:', error);
    }
};
deployCluster();