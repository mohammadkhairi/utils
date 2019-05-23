# Generic Utility Package

## Purpose
 To store all the generic feature which can be use through out application or services

## Installation
``npm install https://github.com/mohammadkhairi/utils.git``

## How To Import
`` const { BuildResponse } = require('utils') ``

## List of middlewares
* BuildResponse
* HandleRequestUsingAsync
* RegisterHTTPErrorCodeHandler
* APIKeyValidator

### BuildResponse
This middleware is used to build a response before  send it back to the caller

### HandleRequestUsingAsync
This middleware is use to handle customs controllers or middlewares developed by the engineers by using asynchronous method. This ensure that the engineers does not create  callback controller or middlware

### RegisterHTTPErrorCodeHandler
The purpose of this middleware is to assign http error code to the error code thrown by the application

### APIKeyValidator
Validate API Token key sent via the header
