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
        sh 'npm install'
        sh 'mkdir PORTFOLIO-2'
      }
    }

    stage('Daemonize') {
      steps {
        sh 'pm2 start npm -- start'
      }
    }

    stage('Finished') {
      steps {
        echo 'Finished'
      }
    }

  }
}