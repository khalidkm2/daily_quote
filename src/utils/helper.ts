import { User } from "#generated/prisma/index.js";
import jwt from "jsonwebtoken"
import {DateTime} from "luxon";
import { userData } from "./types.js";

interface userPayload{
     id: number,
     name: string,
     email: string,
}

export function generateJwtToken(user:userPayload){
    const token = jwt.sign(user,"daily_quote",{expiresIn:"7d"})
    return token;

}

export function chunkArray<T>(arr:T[],size:number){
    const result:T[][] = [];
    for(let i = 0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result;
}

export function isUserPreferredTime(user:userData){
    const nowUTC = DateTime.utc()
    const userNow = nowUTC.setZone(user.timezone);
    return (
        userNow.hour === user.preferredHour && 
        userNow.minute === user.preferredMinute
    );
    
}