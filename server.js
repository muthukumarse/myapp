'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = 8080;
const HOST = '0.0.0.0';

var build_sha = fs.readFileSync('./build_sha','utf8', (err, build_sha) => {
  if (err) {
    console.error(err);
    return;
  }
});
var version = fs.readFileSync('./version','utf8', (err, version) => {
  if (err) {
    console.error(err);
    return;
  }
});

var router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/version', (req, res) => {
  const response = {
    "version": version,
    "build_sha": build_sha,
    "description": "version meta data"
  }
  res.send(response)
});

app.use('/', router);
module.exports = app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});