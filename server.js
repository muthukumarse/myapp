'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/version', (req, res) => {
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
  const response = {
    "version": version,
    "build_sha": build_sha,
    "description": "version meta data"
  }
  res.send(response)

  
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
