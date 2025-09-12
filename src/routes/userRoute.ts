
import { signIn, signUp, updateTime } from "#controllers/userController.js"
import { verifyJwt } from "#middlewares/authMiddleware.js"
import express from "express"

const router = express.Router()


router.post("/signup",signUp)
router.post("/signin", signIn)
router.post("/update-time",verifyJwt,updateTime)


export default router