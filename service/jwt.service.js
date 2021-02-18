const jwtService = require('jsonwebtoken');


const createBadSignatureToken = payload => jwtService.sign(payload, 'wrongSecret', { expiresIn: '1d',  issuer: process.env.JWT_ISSUER });
const createValidToken = payload => jwtService.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d',  issuer: process.env.JWT_ISSUER });
const createExpiredToken = payload => jwtService.sign(payload, process.env.JWT_SECRET, { expiresIn: '-1d',  issuer: process.env.JWT_ISSUER });

module.exports = {
    createBadSignatureToken,
    createExpiredToken,
    createValidToken,
};
