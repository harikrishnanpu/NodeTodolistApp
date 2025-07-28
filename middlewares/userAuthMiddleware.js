const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");



const checkUserAndRedirect = async (req,res,next) => {
    try{

        const token = req.cookies.HariToken;
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        const user = UserModel.findById(decoded.userId).lean().select('-password');

        if(!user || user.isBlocked){
           return next();
        }


       return res.redirect('/home');

    }catch(err){
        next();
    }

}



const checkIsUserLoggedIn = async (req,res,next) => {

    try{

        const token = req.cookies.HariToken;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decodedToken.userId).lean().select('-password');
        
        if(!user || user.isBlocked){
           return res.redirect('/login?error=blocked')
        }

        req.user = user
        return next()
    }catch(err){
       res.redirect('/login')
    }

}


module.exports = { checkUserAndRedirect, checkIsUserLoggedIn }