pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        
        stage('stage2') {
            steps {
                sh 'mkdir new_files && ls -all'
            }
        }
    }
}
