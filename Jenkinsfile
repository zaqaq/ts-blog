pipeline {
  agent any
  stages {
    stage('build now') {
      steps {
        sh '''yarn install
yarn build
tar -zcvf blog-package.tar.gz build
mv blog-package.tar.gz /data/blog'''
      }
    }

    stage('clean play') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }

    stage('xzvf play') {
      steps {
        sh '''cd /data/blog
rm -rf static asset-manifest.json favicon.ico index.html robots.txt
tar -xzvf blog-package.tar.gz
cd build
mv * ../
cd ../
rm -rf blog-package.tar.gz
rm -rf build'''
      }
    }

  }
}
