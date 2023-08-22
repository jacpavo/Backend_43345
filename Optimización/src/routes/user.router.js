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
    const {firstName, lastName, age, email} = req.body
    if(!firstName || !lastName || !email){
        CustomError.createError(
            {
                name:"user creation error",
                cause: generateErrorInfo({
                    firstName, 
                    lastName, 
                    email,
                }),
                message: 'error trying to creat user',
                code: ErrorEnum.INVALID_TYPES_ERROR,
            });
    }
    const user = {
        firstName,
        lastName,
        email,
        age
    }

    users.push(user);
    res.send({ status: "succes", payload: user});
});

export default router