import jwt from "jsonwebtoken"

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