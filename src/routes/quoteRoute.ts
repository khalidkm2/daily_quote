import { getQuote } from "#controllers/quoteController.js";
import express from "express";

const router = express.Router();

router.get("/random",getQuote);

export default router;


