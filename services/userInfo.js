
const jwt = require('jsonwebtoken');

export const fetchUserDetails = async (req,res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = req.headers['authorization'];
    console.log(token);
    const userSignedData = jwt.decode(token);
    if (userSignedData != null && userSignedData.userData != null) {
        res.send(userSignedData.userData);
    } else {
        res.send("Unable to find the user details");
    }
}