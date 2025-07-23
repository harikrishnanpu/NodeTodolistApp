

const express = require('express');
const { renderSignupPage,registerNewUser } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/signup', renderSignupPage)
userRouter.post('/signup',registerNewUser);

module.exports = userRouter;