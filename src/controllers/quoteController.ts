import { prisma } from "#config/db.js"
import { getRandomQuote } from "#services/quoteService.js"
import { RequestHandler } from "express"


export const getQuote:RequestHandler = async(req,res) => {
    try {
        const quote = await getRandomQuote();
        return res.status(200).json({data:quote});
    } catch (error) {
        return res.status(500).json({message:"failed to get the quote"});
    }
}