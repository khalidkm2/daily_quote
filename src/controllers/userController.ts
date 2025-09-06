import { prisma } from "#config/db.js";
import { signInData, signUpData } from "#types.js";
import { RequestHandler } from "express";



export const signUp:RequestHandler = async(req,res) => {
    try {
        const {name,email,password}:signUpData = req.body;
        console.log("inside signup controller ")
        if(!email || !password){
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
        // const hashedPassword = 
        const newUser = await prisma.user.create({
            data:{name,email,password}
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
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(!user){
            return res.status(400).json({message:"username not found. please signup first"})
        }
        //check password
        // create jwt token
        // set cookie

    } catch (error) {
         console.log(error);
        return res.status(500).json({message:"failed to sign in"})
    }
}