
const jwt = require('jsonwebtoken');
const logger = require('../logger/index').logger;

export const fetchUserDetails = async (req,res) => {
    const token = req.headers['authorization'];
    logger.info(token);
    const userSignedData = jwt.decode(token);
    if (userSignedData != null && Object.keys(userSignedData).length > 0) {
        res.send(userSignedData.userData);
    } else {
        res.send("Token Expired");
    }
}