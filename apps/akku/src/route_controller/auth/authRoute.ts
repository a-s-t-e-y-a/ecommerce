import express from 'express'
import loginRouter from './login/route'
import signupRouter from './signup/route'
const authRouter = express.Router()

authRouter.use('/login',loginRouter)
authRouter.use('/signup',signupRouter)

export default authRouter