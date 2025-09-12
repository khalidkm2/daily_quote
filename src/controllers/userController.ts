import { prisma } from "#config/db.js";
import { signInData, signUpData, updateTimeData, userData } from "#utils/types.js";
import { RequestHandler } from "express";
import * as bcrypt from 'bcrypt';
import { generateJwtToken } from "#utils/helper.js";
import { User } from "@prisma/client";



export const signUp:RequestHandler = async(req,res) => {
    try {
        const {name,email,password}:signUpData = req.body;
        console.log("inside signup controller ")
        if(!email || !password || !name){
            return res.status(400).json({message:"all fields are required"})
        }
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(user){
            return res.status(400).json({message:"user already exists go to login"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await prisma.user.create({
            data:{name,email,password:hashedPassword}
        })

        if(!newUser){
            return res.status(500).json({message:"failed to signup try again"})
        }
        
        return res.status(200).json({message:"user signed up  successfully"})
        

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"failed to sign up"})
    }
}

export const signIn: RequestHandler = async(req,res) => {
    const {email,password}:signInData = req.body;
    try {
        const user:User | null = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(!user){
            return res.status(400).json({message:"username not found. please signup first"})
        }
        //check password
        const result = await bcrypt.compare(password,user.password);
        if(!result){
            return res.status(401).json({message:"password is incorrect"})
        }
        // create jwt token
        const newToken = generateJwtToken({id:user.id,name:user.name,email:user.email})

        const {password:_,...filteredUser} = user;

        // set cookie
        res.status(200).cookie("token",newToken,{httpOnly:true,secure:process.env.NODE_ENV === "production"}).json({
            message:"signin successfully",
            data: filteredUser
        })

        //send response


    } catch (error) {
         console.log(error);
        return res.status(500).json({message:"failed to sign in"})
    }
}



export const updateTime:RequestHandler = async(req,res) => {
    try {
       const {preferredMinute,preferredHour,timezone}:updateTimeData = req.body;
        const updatedUser = await prisma.user.update({
            where:{id:req.user?.id},
            data:{
                preferredHour,
                preferredMinute,
                timezone
            },
            
        })
        if(!updatedUser){
            return res.status(400).json({message:"data invalid"})
        }
        return res.status(200).json({message:"updated successfully"})
    } catch (error) {
        return res.status(500).json({message:"failed to update the user"})
    }
}
