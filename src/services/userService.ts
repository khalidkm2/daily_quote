import { prisma } from "#config/db.js"
import { User } from "@prisma/client"



export const getAllUsersMail = async() => {
    const users = await prisma.user.findMany({
        select:{
            email:true  
        }
    })
    return users
}

export const getAllUsers = async() => {
    // const now = new Date();
    // const hour = now.getUTCHours();
    // const minute = now.getUTCMinutes();

    const users = await prisma.user.findMany({
        where: {
         preferredHour: {not:null},
         preferredMinute: {not:null},
         timezone:{not:null}
        },
        select:{
            email:true,
            preferredHour:true,
            preferredMinute:true,
            timezone:true
        }
        

});
    return users;
}