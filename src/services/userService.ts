import { prisma } from "#config/db.js"



export const getAllUsersMail = async() => {
    const users = await prisma.user.findMany({
        select:{
            email:true  
        }
    })
    return users
}