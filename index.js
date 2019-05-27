'use strict'

const BuildResponse = require('./src/middlewares/build_response');
const HandleRequestUsingAsync = require('./src/middlewares/handle_request_using_async');
const RegisterHTTPErrorCodeHandler = require('./src/middlewares/register_http_error_code_handler');
const APITokenKeyValidator = require('./src/middlewares/api_token_key_validator');

module.exports = {
    BuildResponse,
    HandleRequestUsingAsync,
    RegisterHTTPErrorCodeHandler,
    APITokenKeyValidator
}