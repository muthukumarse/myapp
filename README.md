## How to run the application in local
- Assume that you have NodeJS and npm installed
- Once you are inside the folder in Terminal
  ```
  npm install
  npm start
  ```
- application should work over browser 
  - Home page - `http://localhost:3000/`
  - Version page - `http://localhost:3000/version`

- Note: on CI
  - version - will picked dynamically on Docker build from package.json "version" 
  - build_sha - will be passed dynamically on Docker build through BUILD_SHA via build-arg variable

## How to build the Docker Image locally to test
- Assume that you have Docker installed
- `docker build -t myapp:1.0 .`
- `docker run -p 8080:8080 myapp:1.0`
- You could change the version in package.json to test 
- You could provide build-arg variable to test build_sha
  - `docker build -t myapp:1.0 . --build-arg BUILD_SHA=123456`

## How to push Docker Image to DockerHub
- over CI pipeline