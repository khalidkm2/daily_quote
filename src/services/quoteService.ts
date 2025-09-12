import { prisma } from "#config/db.js"


export const getRandomQuote = async() => {
    try {
     const count = await prisma.quote.count();
     console.log(count)
     const randomId = Math.floor(Math.random() * 72) + 1;

     const quote = await prisma.quote.findUnique({
        where: { id: randomId }
    });

        return quote;
    } catch (error) {
        console.log(error)
        throw error
    }
}