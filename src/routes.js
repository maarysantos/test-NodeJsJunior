const express = require('express');

const RouteController = require ('./controllers/RouteController');

const validate = require('express-validation');
const validator = require('./validators/Route');

const routes = express.Router();

routes.post('/', validate(validator), RouteController.store);

module.exports = routes;