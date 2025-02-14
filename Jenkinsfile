pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sidnair19/devsecops.git'  // Update with your repo
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'  // Replace 'myapp' with your image name
            }
        }

        stage('Security Scan') {
            steps {
                script {
                    // Ensure Trivy is installed
                    sh 'trivy --version'
                    
                    // Scan the built Docker image
                    sh 'trivy image myapp:latest'  // Replace 'myapp' with your image name
                }
            }
        }

        stage('Build with Docker Compose') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}