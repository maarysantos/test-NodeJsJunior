const express = require('express');

const RouteController = require ('./controllers/RouteController');

const routes = express.Router();

routes.post('/', RouteController.store);

module.exports = routes;