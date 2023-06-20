module.exports = async (req, res, next) => {

    console.log("req session id>>>",req.session);
    const currentSessinRepository = req.db.getRepository("CurrentSessions");
    
    const userSession = await currentSessinRepository.findOne({
        where: {
            userId: req.query.userId,
        },
    });

    
    console.log("check this here",userSession);
    
    if (userSession !== null && Object.keys(userSession).length > 0) {
        if(Math.round((new Date()).getTime() - (new Date(userSession.datetimeAuthenticated).getTime()))/60000 <= 60) {
            console.log("Yes true");
            next();
        } else {
            res.send("Session Expired! Please relogin");
        }
        
    } else {
        res.send("Not Authenticated");
    }
};