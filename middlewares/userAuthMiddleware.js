const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");




const checkIsUserLoggedIn = async (req,res,next) => {

    try{

        
        const token = req.cookies.HariToken;

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // console.log(decodedToken);

        const user = await UserModel.findById(decodedToken.userId).lean().select('-password');
        

        if(!user || user.isBlocked){
            res.redirect('/login')
        }


        req.user = user

        next()

    }catch(err){
       res.redirect('/login')
    }

}


module.exports = { checkIsUserLoggedIn }