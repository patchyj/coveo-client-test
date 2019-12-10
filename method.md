# Method

## 1. Project set up

Setting up this project was done in 3 stages:

- Folder set up
  - I like to use [React Slingshot](https://github.com/coryhouse/react-slingshot) for a basis as I like how it comes set up with configurable Webpack, Redux and CSS post-processing
- Pipeline set up
  - To keep it simple, this project is using the free versions of [CircleCI](https://circleci.com/) and [Sonarqube](https://sonarcloud.io/), which don't require much configuration and can plug straight into Github
  - Github itself has the Master branch protected with only Pull Requests from non-protected branches onto Master allowed
  - CircleCI (tests / lint / code quality) is configured to pass before merging
- Initial deployment
  - For speed, ease and cost this app uses Heroku and builds the master branch using the Docker image