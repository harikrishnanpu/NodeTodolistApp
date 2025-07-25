

const express = require('express');
const { renderSignupPage,registerNewUser, renderLoginPage, loginUserAccount, renderHomePage } = require('../controllers/userController');
const { checkIsUserLoggedIn } = require('../middlewares/userAuthMiddleware');
const userRouter = express.Router();


userRouter.get('/home', checkIsUserLoggedIn , renderHomePage)


userRouter.get('/signup', renderSignupPage)
userRouter.post('/signup',registerNewUser);

userRouter.get('/login', renderLoginPage);
userRouter.post('/login', loginUserAccount);

module.exports = userRouter;