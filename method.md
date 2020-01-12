# Method

## 0. Pre-setup

Like any project, no matter how small, getting organised is key. I like to use Trello writing up and breaking down tasks across a friendly Kanban UI and Sketch for wireframing. The more time spent planning code is less time wasted coding.

NB: Sketch designs are only very basic outlines at this stage

### My initial Trello board:

<img src="./readme_media/trello.png" width="400" alt="Trello">

### My initial Trello board:

<img src="./readme_media/sketch.png" width="400" alt="Trello">

---

## 1. Project setup

Setting up this project was done in 3 stages:

- Folder set up
  - I like to use [React Slingshot](https://github.com/coryhouse/react-slingshot) for a basis as I like how it comes set up with configurable Webpack, Redux and CSS post-processing. I immediately strip out all the parts not needed
- Pipeline set up
  - To keep it simple, this project is using the free versions of [CircleCI](https://circleci.com/) and [Sonarqube](https://sonarcloud.io/), which don't require much configuration and can plug straight into Github
  - Github itself has the Master branch protected with only Pull Requests from non-protected branches onto Master allowed
  - CircleCI (tests / lint / code quality) is configured to pass before merging
- Initial deployment
  - For speed, ease and cost, this app uses Heroku and builds the master branch using the Docker image.
  - Heroku has also been configured with a pipeline with two apps: Staging and Production. Annoyingly, you can't promote code from one to the other if the apps are configured to deploy using Docker. I've kept the steps in, however, deploying each manually with unique branches: `staging` and `master` (for production)

Im summary:

- I've got two apps in the Heroku pipeline: staging and production
- Each app is linked to the same Github repo but with hooks on different branches: staging (for staging) and master (for production)
- The Github repo has rules in place that enforce pull requests that can only be approved after they've passed CircleCI and Sonarqube quality checks

### CircleCI and SonarCloud Dashboards

![circleci-and-sonarcloud](./readme_media/circleci-and-sonarcloud.png)

### Heroku Pipeline

![heroku pipeline](./readme_media/heroku-pipeline.png)

---

## 2. Coveo-SAQ API

Links to Documentation:

- [Query syntax documentation](http://onlinehelp.coveo.com/en/ces/7.0/User/coveo_query_syntax_reference.htm)
- [REST API documentation](https://developers.coveo.com/display/public/SearchREST/Invoking+the+REST+Search+API)
- [REST parameter documentation](https://developers.coveo.com/display/SearchREST/Query+Parameters)
- [Response format documentation](https://developers.coveo.com/display/SearchREST/Query+Results)

It was particularly interesting building a site around the SAQ API. I initially used a POST axios request but in the end I found it more intuitive structuring a GET request, passing a typed query from the input along with various options (price range, colors etc) to structure the query. 

Given time restraints I could only really use the basic query param but I intend to keep experimenting and implementing various other params for as long as I can.

---

## 3. RapidAPI: Wine and Breweries

- [Rapid API homepage](https://rapidapi.com/collection/alcohol-brewery-api)

I wanted to do something a bit different too, so I did a bit of research and came across RapidAPI, a collection of various alcohol-related APIs. I've implemented two in this tech test, a brewery one and a wine one, and built a page for the results using a paginator library. 

The downside is that there wasn't as much information from the APIs as I initially thought so it feels a bit bare in places, but it wasn't the priority. It's always fun working with new APIs.

---

## 4. Cleanup and final tests

I did a fair amount of restructuring and renaming in the latter half of the project, trying to keep things consistent. As a result, a lot of time was spent updating, adding and removing tests. 

## To Do's:

Like any project, there I things I would like to add:

- Initially I would have liked to have written an end-to-end test suite with Cypress but I just didn't have time
- Implementing a mock user-comment section would have been fun and added a new aspect to the site. JSONPlaceHolder my normal go-to for that kind of thing, but again I didn't have time
