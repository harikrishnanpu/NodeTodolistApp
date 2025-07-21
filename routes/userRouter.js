

const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/signup', userController.renderSignupPage);
userRouter.post('/signup', userController.registerNewUser)


module.exports = userRouter;