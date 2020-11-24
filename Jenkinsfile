pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh "npm run build"
            }
        }
        stage('Test') {
            steps {
                sh './test.sh'
            }
        }
        stage('Deploy') {
            steps {
                sh "sudo rm -rf /var/www/html/"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/html/"
            }
        }
    }
}
