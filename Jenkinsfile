pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Test") {
            steps {
                sh "npm run test"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/html/"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/html/"
            }
        }
    }
}
