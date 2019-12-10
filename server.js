/* eslint-disable no-console */
const express = require('express');
// var serveStatic = require('serve-static');
const app = express();
app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started ${port}`);
});
