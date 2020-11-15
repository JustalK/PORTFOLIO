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
      }
    }

    stage('Seed and Build') {
      steps {
        sh '''npm run seed
npm run build'''
      }
    }

    stage('Reload PM2') {
      steps {
        sh 'pm2 reload all'
      }
    }

    stage('Finished') {
      steps {
        echo 'Finished'
      }
    }

  }
}