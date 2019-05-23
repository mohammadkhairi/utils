'use strict';

const HandleRequestUsingAsync = (asyncHandler) => {
    return (req, res, next) => {
        const response = asyncHandler(req);

        response.then((response) => {
            res.locals.response_data = response;
            next(null);
        }).catch((err) => {
            return next(err);
        });
    };
}
module.exports = HandleRequestUsingAsync;
