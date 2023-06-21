const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = req.headers['authorization'];
    console.log(token);
    const verified = jwt.verify(token, jwtSecretKey);
    const userSignedData = jwt.decode(token);
    console.log(userSignedData);
    if (verified && userSignedData !== null && Object.keys(userSignedData).length > 0) {
        if(Math.round((new Date()).getTime() - (new Date(userSignedData.time).getTime()))/60000 <= 60) {
            console.log("Yes true");
            next();
        } else {
            res.send("Session Expired! Please relogin");
        }
    } else {
        res.send("Not Authenticated");
    }

};