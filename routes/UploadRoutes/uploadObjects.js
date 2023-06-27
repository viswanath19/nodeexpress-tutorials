import express from 'express';
import { uploadDataObjects } from '../../services/uploadDataObjects';

const UploadObjects = express.Router();

UploadObjects.get("/upload",(req,res,next)=>{
    uploadDataObjects(req,res,next);
});

export default UploadObjects;