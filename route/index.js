const authRouter = require('./route.authentication')
const userRouter = require('./route.user')
const loginRouter = require('./route.login')
const reportRouter = require('./route.report')
const surveyRouter = require('./route.survey')
const express = require('express')
const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter )
router.use('/survey', surveyRouter)
router.use('/login', loginRouter)


module.exports = router