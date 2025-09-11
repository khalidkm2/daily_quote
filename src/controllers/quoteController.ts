import { prisma } from "#config/db.js"
import { getRandomQuote } from "#services/quoteService.js"
import { RequestHandler } from "express"


export const randomQuote:RequestHandler = async(req,res) => {
    try {
        const quote = await getRandomQuote()
        if(!quote){
            return res.status(204).json({message:"failed to get data"})
        }
        return res.status(200).json(quote)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Failed to fetch"})
    }
}