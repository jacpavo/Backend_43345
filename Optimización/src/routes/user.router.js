import { Router } from "express";
import { ErrorEnum } from "../services/enum/error.enum.js";
import { generateErrorInfo } from "../services/info.js";
import CustomError from "../services/Error/CustomError.class.js";

const user = []
const router = Router()
router.get('/', (req,res)=> 
res.send({
    status: 'success',
    playload: user
}))

router.post('/', (req,res)=>{
    
})