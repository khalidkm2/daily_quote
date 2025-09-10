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