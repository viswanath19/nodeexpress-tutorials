
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
        res.send("Login Successfull");
    } else {
        res.send("Login Failed");
    }
}