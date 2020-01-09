# Coveo tech test

Completed Tech test for the Frond-End developer position at Coveo, Montreal

## Technologies

- React
- Redux
  - `redux-saga`
  - `redux-thunk`
  - `redux-persist`
- Spectre CSS
- Styled Components
- Axios
- Jest & Enzyme

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

#### Docker

The image installs the [NPM module `serve`](https://www.npmjs.com/package/serve) to serve the app as opposed to Nginx

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
- Each branch requires CircleCI to pass; SonarCloud is optional but useful for code health

For every new feature, a PR would be made to staging from a feature branch.

Once everything passed, the PR would be merged, triggering an automatic deploy on the connected app in the Heroku pipeline.

Once built, a smoketest would be carried out to make sure everything still functioned correctly.

When the staging branch has sufficient quality features, it would be promoted to the master
