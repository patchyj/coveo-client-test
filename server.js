/* eslint-disable no-console */
const express = require('express');
const config = require('./config');

console.log(config);
// var serveStatic = require('serve-static');
const app = express();
app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const { port } = config;
app.listen(port, () => {
  console.log(`server started ${port}`);
});
