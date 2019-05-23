'use strict'

const joi = require('@hapi/joi')

module.exports = {
    dummyResources: {
        param: joi.object().keys({
            name: joi.string().required(),
            id:joi.number().required()
        })
    }
}
