

const express = require('express');
const { renderSignupPage,signup } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/signup', renderSignupPage)
userRouter.post('/signup',signup);

module.exports = userRouter;