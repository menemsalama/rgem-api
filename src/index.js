const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const api = require('./api');

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@ds119969.mlab.com:19969/${DB_NAME}`)
.then(() => {
  console.log("connected to mongodb");
})
.catch(console.log);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
