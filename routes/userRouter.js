

const express = require('express');
const { renderSignupPage,registerNewUser, renderLoginPage, loginUserAccount, renderHomePage, renderLandingPage } = require('../controllers/userController');
const { checkIsUserLoggedIn, checkUserAndRedirect } = require('../middlewares/userAuthMiddleware');
const userRouter = express.Router();


userRouter.get('/', checkUserAndRedirect, renderLandingPage)

userRouter.get('/home', checkIsUserLoggedIn , renderHomePage)


userRouter.get('/signup', renderSignupPage)
userRouter.post('/signup',registerNewUser);

userRouter.get('/login', renderLoginPage);
userRouter.post('/login', loginUserAccount);

module.exports = userRouter;