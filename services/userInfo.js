
const jwt = require('jsonwebtoken');

const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

const s3 = new AWS.S3();

export const fetchUserDetails = async (req,res) => {
    const token = req.headers['authorization'];
    console.log(token);
    const userSignedData = jwt.decode(token);
    const data = {Bucket:'myawsnodejsbucket',Key:`${userSignedData.userData.name}-${(new Date()).toLocaleTimeString()}.text`,Body:JSON.stringify(userSignedData.userData)}
    s3.putObject(data,(err,data)=>{
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
            res.send("Upload failed");
        }
    });
}