const express = require('express');
const gemsController = require('./gemsController');

const gemsRouter = express.Router();

gemsRouter.post("/new", gemsController.createGem);

gemsRouter.post("/many/list", gemsController.listGemsSysDep);
gemsRouter.get("/many/all", gemsController.listAllGems);

module.exports = gemsRouter;
