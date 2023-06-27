const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

const s3 = new AWS.S3();

export const uploadDataObjects = (req,res,next) => {

    const data = {Bucket:'myawsnodejsbucket',Key:`${req.body.objectName}-${(new Date()).toLocaleTimeString()}.text`,Body:JSON.stringify(req.body)}
    
    s3.putObject(data,(err,data)=>{
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
            res.send("Upload failed");
        }
    });
}