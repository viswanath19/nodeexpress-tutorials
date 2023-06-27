import express from 'express';
import { fetchUserDetails } from '../../services/userInfo';

const userDetails = express.Router();

userDetails.get("/userDetails",(req,res,next)=>{
    fetchUserDetails(req,res);
});

export default userDetails;