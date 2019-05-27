'use strict'

const { expect } = require('chai');
const StandardError = require('standard-error');
const httpMock = require('node-mocks-http');

const HandleRequestUsingAsync = require('./../../src/middlewares/handle_request_using_async');

describe('Handle Request Using Async', function () {
    let req, res, dummyFunction;

    beforeEach(() => {
        req = httpMock.createRequest({
            param: {
                id: 1,
                name: 'dasds'
            }
        });
        res = httpMock.createResponse();
    });

    describe('when all the parameter send does match with the resources', function () {
        before(() => {
            dummyFunction = async (request, response) => {
                return 'success';
            }
        });

        it('will no throw an error', function (done) {
            const handleRequestUsingAsync = HandleRequestUsingAsync(dummyFunction);
            handleRequestUsingAsync(req, res, (err,response) => {
                expect(err).to.be.null;
            });

            done();
        });
    });

    describe('when all the parameter send does match with the resources', function () {
        before(() => {
            dummyFunction = async (request, response) => {
                throw new StandardError('DUMMY_ERROR', 'DUMMY ERROR', null, {});
            }
        });

        it('will no throw an error', function (done) {
            const handleRequestUsingAsync = HandleRequestUsingAsync(dummyFunction);
            handleRequestUsingAsync(req, res, (err) => {
                expect(err.error_code).equals('DUMMY_ERROR');
            });

            done();
        });
    });
});