const logger = require('../logger/index').logger;
const AWS = require('aws-sdk');

export const uploadDataObjects = (req,res,next) => {

    AWS.config.update({
        accessKeyId : process.env.AWS_ACCESS_KEY,
        secretAccessKey : process.env.AWS_SECRET_KEY,
        region : process.env.AWS_REGION
    });

    const s3 = new AWS.S3();

    const data = {Bucket:'myawsnodejsbucket',Key:`${req.body.objectName}-${(new Date()).toLocaleTimeString()}.text`,Body:JSON.stringify(req.body)}
    
    s3.putObject(data,(err,data)=>{
        if(!err) {
            logger.info("object uploaded to s3 bukcet");
            res.send(data);
        } else {
            console.log(err);
            res.send("Upload failed");
        }
    });
}