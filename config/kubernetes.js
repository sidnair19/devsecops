// config/kubernetes.js
const k8s = require('@kubernetes/client-node');

// Initialize Kubernetes client configuration
const kc = new k8s.KubeConfig();
kc.loadFromDefault(); // Load Kubernetes configuration from ~/.kube/config
const k8sApiApps = kc.makeApiClient(k8s.AppsV1Api);
const k8sApiCore = kc.makeApiClient(k8s.CoreV1Api);

// Utility to create a namespace (if not already exists)
exports.createNamespace = async (namespace) => {
    try {
        const namespaceManifest = {
            metadata: {
                name: namespace,
            },
        };
        await k8sApiCore.createNamespace(namespaceManifest);
        console.log(`Namespace "${namespace}" created successfully.`);
    } catch (error) {
        if (error.body && error.body.reason === 'AlreadyExists') {
            console.log(`Namespace "${namespace}" already exists.`);
        } else {
            console.error('Error creating namespace:', error);
            throw error;
        }
    }
};

// Utility to deploy an application
exports.deployApplication = async (namespace, deploymentManifest) => {
    try {
        const response = await k8sApiApps.createNamespacedDeployment(namespace, deploymentManifest);
        console.log('Application deployed successfully:', response.body);
        return response.body;
    } catch (error) {
        console.error('Error deploying application:', error);
        throw error;
    }
};

// Utility to get deployment status
exports.getDeploymentStatus = async (namespace, deploymentName) => {
    try {
        const response = await k8sApiApps.readNamespacedDeployment(deploymentName, namespace);
        console.log('Deployment Status:', response.body.status);
        return response.body.status;
    } catch (error) {
        console.error('Error fetching deployment status:', error);
        throw error;
    }
};

// Utility to scale a deployment
exports.scaleDeployment = async (namespace, deploymentName, replicas) => {
    try {
        const patch = [
            {
                op: 'replace',
                path: '/spec/replicas',
                value: replicas,
            },
        ];
        const response = await k8sApiApps.patchNamespacedDeployment(
            deploymentName,
            namespace,
            patch,
            undefined,
            undefined,
            { headers: { 'Content-Type': 'application/json-patch+json' } }
        );
        console.log(`Scaled deployment "${deploymentName}" to ${replicas} replicas.`);
        return response.body;
    } catch (error) {
        console.error('Error scaling deployment:', error);
        throw error;
    }
};

// Utility to delete a deployment
exports.deleteDeployment = async (namespace, deploymentName) => {
    try {
        const response = await k8sApiApps.deleteNamespacedDeployment(deploymentName, namespace);
        console.log(`Deployment "${deploymentName}" deleted successfully.`);
        return response.body;
    } catch (error) {
        console.error('Error deleting deployment:', error);
        throw error;
    }
};

// Utility to list all pods in a namespace
exports.listPods = async (namespace) => {
    try {
        const response = await k8sApiCore.listNamespacedPod(namespace);
        console.log(`Pods in namespace "${namespace}":`, response.body.items);
        return response.body.items;
    } catch (error) {
        console.error('Error listing pods:', error);
        throw error;
    }
};