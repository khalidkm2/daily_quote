import { prisma } from "#config/db.js";
import { getEnv, userPayload } from "#utils/helper.js";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const verifyJwt:RequestHandler = async(req,res,next) => {
    try {
        const token = req.cookies?.token || req.header("authorization")?.split(" ")[1];
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const decoded = jwt.verify(token,getEnv("SECRET_KEY")) as userPayload
        const user = await prisma.user.findFirst({where:{id:decoded.id}})
        if(!user){
            return res.status(401).json({message:"you are not authorized"})
        }
        req.user = user;
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"invalid token"})
    }
}