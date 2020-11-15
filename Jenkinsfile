pipeline {
  agent any
  stages {
    stage('Start') {
      steps {
        echo 'Start the integration'
      }
    }

    stage('Install') {
      steps {
        sh 'npm run start'
      }
    }

    stage('End') {
      steps {
        echo 'Finished'
      }
    }

  }
}