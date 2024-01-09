
const jwt =require('jsonwebtoken');
require('dotenv').config()
async function verifyAccessToken(req, res, next) {
    if (!req.headers['authorization']) return next("Unauthorized user");

    const authHeader = req?.headers?.['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    try {
        const decoded = await jwt.verify(token, process.env.tokenKey);
        req.user = decoded;
        next();  
    } catch (err) {
        let data = {
            message: err.message,
        };
        return res.status(401);  
    }
}                                

module.exports = { verifyAccessToken };


