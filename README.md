# DevSecOps Project

## Overview
This project demonstrates a comprehensive DevSecOps pipeline implementation. The system ensures seamless automation of CI/CD workflows, enhanced Kubernetes cluster management, and robust container image security, while integrating real-time monitoring and vulnerability scanning.

### Key Features
1. **CI/CD Pipeline Automation**:
   - Automates build, test, and deployment processes.
   - Integration with GitHub Actions for CI/CD workflows.

2. **Kubernetes Cluster Management**:
   - Automated cluster deployment and scaling.
   - Handles traffic spikes efficiently.

3. **Container Image Security**:
   - Vulnerability scanning of container images.
   - Secure signing of container images.

4. **Monitoring and Logging**:
   - Real-time monitoring of deployments.
   - Centralized logging for debugging and tracking.

5. **Security Scanning**:
   - **SonarQube**: Static Application Security Testing (SAST) to detect code vulnerabilities.
   - **Trivy**: Container image vulnerability scanning.
   - **Grype**: Additional container security scanning for comprehensive vulnerability assessment.

---

## Application Structure
```plaintext
devsecops-project/
├── public/
│   ├── css/
│   │   └── style.css                # Styles for the frontend dashboard
│   ├── js/
│   │   └── app.js                   # Client-side JavaScript for dashboard interactions
│   └── index.html                   # Dashboard for CI/CD pipeline and monitoring visualization
├── server/
│   ├── controllers/
│   │   └── pipelineController.js    # Handles CI/CD pipeline triggers and operations
│   │   └── securityController.js    # Handles security scans and vulnerability management
│   ├── models/
│   │   └── pipelineModel.js         # Data model for pipeline configurations and logs
│   │   └── securityModel.js         # Data model for vulnerability and scan reports
│   ├── routes/
│   │   └── pipelineRoutes.js        # API routes for pipeline management
│   │   └── securityRoutes.js        # API routes for security tools and scans
│   └── server.js                    # Entry point for the backend server
├── config/
│   ├── database.js                  # Database configuration (MongoDB/PostgreSQL)
│   ├── kubernetes.js                # Kubernetes configuration and management utilities
│   └── ci-cd-config.json            # JSON file for pipeline configurations
├── scripts/
│   ├── buildPipeline.js             # Script for automating build processes
│   ├── deployCluster.js             # Script for managing Kubernetes deployments
│   └── scanImages.js                # Script for container image vulnerability scanning
├── tests/
│   ├── unit/
│   │   └── pipelineTests.js         # Unit tests for pipeline-related operations
│   │   └── securityTests.js         # Unit tests for security functionalities
│   ├── integration/
│   │   └── integrationTests.js      # Integration tests for end-to-end workflows
│   └── README.md                    # Guide for running tests
├── logs/
│   └── app.log                      # Log file for application events
├── package.json                     # Node.js project dependencies and metadata
├── README.md                        # Project overview and setup instructions
└── .env                             # Environment variables for sensitive configurations
```

---
Installation
Clone the Repository:

git clone <repository-url>
cd devsecops-project
Install Dependencies:

npm install
Set Up Environment Variables:

Create a .env file in the root directory.
Add the following variables:
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
KUBERNETES_CLUSTER=<cluster-name>
Start the Application:

npm start
The server runs on http://localhost:5000 by default.

Scripts
Build Pipeline:

node scripts/buildPipeline.js
Deploy Kubernetes Cluster:

node scripts/deployCluster.js
Scan Container Images:

node scripts/scanImages.js
Testing
Run Unit Tests:

npm run test:unit
Run Integration Tests:

npm run test:integration
CI/CD Pipeline
This project uses GitHub Actions for CI/CD automation. The workflow is defined in .github/workflows/ci-cd.yml. On every push to the main branch, the pipeline will:

Install dependencies.
Run unit and integration tests.
Build and push Docker images to the container registry.
Deploy to the Kubernetes cluster.

## Security Scanning Details

### **SonarQube - Static Application Security Testing (SAST)**
SonarQube is integrated into the pipeline to analyze source code and detect security vulnerabilities.
#### Running SonarQube Scan:
```bash
sonar-scanner -Dsonar.projectKey=devsecops -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000
```
#### Reports Generated:
- Code Smells
- Security Hotspots
- Vulnerability Reports

### **Trivy - Container Image Security Scanning**
Trivy is used to scan container images for vulnerabilities in dependencies and configurations.
#### Running Trivy Scan:
```bash
trivy image <your-container-image>
```
#### Reports Generated:
- Critical vulnerabilities
- High-risk vulnerabilities
- Package-related security issues

### **Grype - Advanced Container Security Analysis**
Grype provides an in-depth vulnerability scan for container images and packages.
#### Running Grype Scan:
```bash
grype <your-container-image>
```
#### Reports Generated:
- Exploitable security vulnerabilities
- CVE analysis
- Dependency security issues

---

## Contributions
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any questions or feedback, feel free to reach out:
- **Email:** siddharthdileep2003@gmail.com
- **GitHub:** [(https://github.com/sidnair19/devsecops.git)]

