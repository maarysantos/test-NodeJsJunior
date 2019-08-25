const Joi = require('joi');

module.exports = {
  body: {
    origin: Joi.string().uppercase({ force: true }),

    destination: Joi.string().uppercase({ force: true }),

    capacity: Joi.number().required(),

    priceLiter: Joi.number().required(),

  }
}