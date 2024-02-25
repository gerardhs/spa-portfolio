pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Build your React app
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests if any
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy to second EC2 instance
                sshagent(['sshkeypair']) {
                    sh 'ssh ubuntu@ec2-16-171-135-177.eu-north-1.compute.amazonaws.com "cd /var/www/html/spa-portfolio && git pull origin main"'
                }
            }
        }
    }
}
