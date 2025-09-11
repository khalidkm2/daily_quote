import { prisma } from "#config/db.js"


export const getRandomQuote = async() => {
    try {
        const quote = await prisma.quote.findFirst({
            orderBy:{
                id:'asc'
            },
            skip: Math.floor(Math.random()*200)
        })
        return quote
    } catch (error) {
        console.log(error)
    }
}