'use strict';

const assert = require('assert-plus');
const Joi = require('@hapi/joi');

const StandardError = require('standard-error');

const BuildResponse = (schema) => {
    assert.object(schema);

    return function (req, res, next) {
        const responseData = res.response_data;
        
        Joi.validate(responseData, schema, function (err, validatedResponseData) {
            if (err) {
                return next(new StandardError('RESPONSE_VALIDATION_ERROR', 'Could not validate response data', err, {}));
            }
            res.status(200).json(validatedResponseData);
        });
    };
}

module.exports = BuildResponse;

