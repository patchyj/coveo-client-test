# Coveo tech test

Completed Tech test for the Frond-End developer position at Coveo, Montreal

## Technologies

- React v16
- Redux
  - `redux-saga`
  - `redux-thunk`
  - `redux-persist`
- Spectre CSS Framework
- Styled Components
- Axios
- Jest & Enzyme
- Docker v19

Environment:

- Node v10
- NPM v6

## How to install

```bash
# clone
git clone https://github.com/patchyj/coveo-client-test.git

# move into directory
cd coveo-client-test

# install
npm i
# or
yarn
```

---

## Create an `.env` file

This project uses several keys that need to be kept out of the public domain. 

To run this project locally with all features you'll need a Google Maps API key, a Rapid API key (and token for the wines API) and, of course, the Cover API token

```bash
# ./config/index.js

PORT=3000
TOKEN=<coveo-api-token>
GOOGLE_MAPS_API_KEY=<google-api-token>
RAPID_API_KEY=<rapid-api-key>
RAPID_API_TOKEN=<rapid-api-token>

```

---

## How to run

```bash
# run with full linting and testing
npm start

# run just the dev server
npm run start:dev
```

---

## Testing

### Unit test: Jest

```bash
# run all tests
npm run test

# run and watch
npm run test:watch <optional filename>

# run and see coverage
npm run test:cover
```

---

## Linting

```bash
# run linter
npm run lint

# run linter and fix
npm run lint:fix
```

---

## Building

This app can be built in two ways:

#### NPM

This is the fastest way to test everything works locally in a build environment:

```bash
# Build the image
npm run build
```

This will run the test suite, lint all files in `/src` and compile all code and assets into a `/dist` folder before serving the app using `serve`. During the build process, any environment variables are injected using webpack.

#### Docker

The image installs the [NPM module `serve`](https://www.npmjs.com/package/serve) to serve the app in the Docker container

```bash
# Build the image
docker-compose build

# Run the image as a container
docker-compose up
```

## Deployment

The pipeline during development is as follows:

- Two apps in the Heroku pipeline: **staging** and **production**
- Each app is linked to the same [Github repo](https://github.com/patchyj/coveo-client-test) but with hooks on different branches: _staging_ (for **staging**) and _master_ (for **production**)
- Each branch requires CircleCI to pass; SonarCloud is optional but useful for code health and analysis

For every new feature, a PR would be made to staging from a feature branch.

Once everything passed, the PR would be merged, triggering an automatic deploy on the connected app in the Heroku pipeline.

Once built, a smoketest would be carried out to make sure everything still functioned correctly.

When the staging branch has sufficient quality features, it would be promoted to the master

