'use strict'

const { expect } = require('chai');
const httpMock = require('node-mocks-http');

const BuildResponse = require('./../../src/middlewares/build_response');
const { dummyResources } = require('./../mock/resources/dummy_resources');

describe('Build Response', function () {
    let req;

    beforeEach(() => {
        req = httpMock.createRequest();
    });

    describe('when all the parameter send does match with the resources', function () {
        it('will no throw an error', function (done) {
            const res = httpMock.createResponse({
                response_data: {
                    param: {
                        name: 'test',
                        id: 1
                    }
                }
            });

            const req = httpMock.createResponse({
                errorCodeMap: {
                    RESPONSE_VALIDATION_ERROR: 500
                }
            });

            const buildResponse = BuildResponse(dummyResources);
            buildResponse(req, res, (err) => {
                expect(err).to.be.not.null;
            });

            done();
        });
    });

    describe('when parameter send does not match with the resources [ param (res) change into params (resource file) ]', function () {
        it('will return RESPONSE_VALIDATION_ERROR', function (done) {
            const res = httpMock.createResponse({
                locals: {
                    response_data: {
                        params: {
                            name: 'test',
                            id: 1
                        }
                    }
                }
            });

            const req = httpMock.createResponse({
                errorCodeMap: {
                    RESPONSE_VALIDATION_ERROR: 500
                }
            });

            const buildResponse = BuildResponse(dummyResources);
            buildResponse(req, res, (err) => {
                expect(err.error_code).equals('RESPONSE_VALIDATION_ERROR');
            });

            done();
        });
    });
});