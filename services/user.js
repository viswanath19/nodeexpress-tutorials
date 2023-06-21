const jwt = require('jsonwebtoken');
export const loginService = async (req,res) => {
    const {username, password} = req.query;

    const userRepository = req.db.getRepository('Users');

    const userData = await userRepository.findOne({
        where: {
            name: username,
            password: password,
        },
    });
    
    if (Object.keys(userData).length > 0) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: (new Date()).toISOString(),
            userData,
        }
        const token = jwt.sign(data, jwtSecretKey);
        //currentSessinRepository.save({'userId':userData.id,'isLoggedIn':true, 'datetimeAuthenticated': (new Date()).toISOString()});
        res.send(token);
    } else {
        res.send("Login Failed");
    }
}

export const signupService = async (req,res) => {
    const {username, password} = req.body;

    const userRepository = req.db.getRepository('Users');

    const userData = await userRepository.save({
        name: username,
        password: password
    });

    if (Object.keys(userData).length > 0) {
        res.send(userData);
    } else {
        res.send("Signup Failed");
    }
}