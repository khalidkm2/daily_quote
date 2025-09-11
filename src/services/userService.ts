import { prisma } from "#config/db.js"



export const getAllUsersMail = async() => {
    const users = await prisma.user.findMany({
        select:{
            email:true  
        }
    })
    return users
}

export const getPreferredUsers = async() => {
    const now = new Date();
    const hour = now.getUTCHours();
    const minute = now.getUTCMinutes();

//     const users = await prisma.user.findMany({
//         where: {
//          preferredHour: hour,
//          preferredMinute: minute
//   }
// });
}