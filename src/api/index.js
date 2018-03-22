const express = require('express');
const gemsRouter = require('./gems');

const apiRouter = express.Router();

apiRouter.use('/gems', gemsRouter);

module.exports = apiRouter;
