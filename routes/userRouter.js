

const express = require('express');
const { renderSignupPage } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/signup', renderSignupPage)


module.exports = userRouter;