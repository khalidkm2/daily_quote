import jwt from "jsonwebtoken"
import {DateTime} from "luxon";
import { userData, UserPreferedData } from "./types.js";
import { User } from "@prisma/client";

export interface userPayload{
     id: number,
     name: string,
     email: string,
}

export function generateJwtToken(user:userPayload){
    const token = jwt.sign(user,getEnv("SECRET_KEY"),{expiresIn:"7d"})
    return token;

}

export function chunkArray<T>(arr:T[],size:number){
    const result:T[][] = [];
    for(let i = 0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result;
}

export function isUserPreferredTime(user:UserPreferedData){
    if(!user.timezone){
        return false
    }
    const nowUTC = DateTime.utc()
    const userNow = nowUTC.setZone(user.timezone);
    return (
        userNow.hour === user.preferredHour && 
        userNow.minute === user.preferredMinute
    );
    
}


export function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing env variable ${key}`);
  return value;
}

