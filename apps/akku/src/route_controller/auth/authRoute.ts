import express from 'express'
import loginRouter from './login/route'
const authRouter = express.Router()

authRouter.use('/login',loginRouter)

export default authRouter