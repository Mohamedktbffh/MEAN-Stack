const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could Not Connect: ',err);
  } else {
    console.log('Connecting to db: ',config.db);
  }
});

app.use(express.static(__dirname + '/client/dist/' ))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
  console.log('Listenning')
});
