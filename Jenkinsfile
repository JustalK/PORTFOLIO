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
        sh 'npm run install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run start'
      }
    }

    stage('Finished') {
      steps {
        echo 'Finished'
      }
    }

  }
}