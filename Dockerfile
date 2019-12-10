# build environment
FROM node:10
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install -g serve
COPY . /app
RUN npm run heroku-postbuild
CMD serve -p $PORT -s dis
