'use strict'

const APIKeyValidator = (schema) => {
    return (req, res, next)=>{
        if (req.get('api-key-token') !== APIKey) {
            return res.status(401).send({
                error_code: 'INVALID_API_KEY',
                message: 'Your API key is invalid'
            });
        }
        next();
    }
}

module.exports = APIKeyValidator;