const UserModel = require("../models/userSchema");
const bcrypt = require('bcrypt');



const addNewUser = async (userData) => {

    try{

        const { username , email, password } = userData;

        const existsingUser = await UserModel.findOne({ email: email });

        if(existsingUser){
            throw new Error('user is already exists')
        }


        const user = new UserModel({
             username:  username,
             email: email
        })

        const hashedPassword = await bcrypt.hash(password,10);

        user.password = hashedPassword
        return await user.save()

    }catch(err){
        throw new Error(err.message)
    }


}



const loginUser = async (userData) =>{

    try{

        const { email , password  } =  userData;


        const user = await UserModel.findOne({ email });

        if(!user){
            throw new Error('user not found')
        }else if(user.isBlocked){
            throw new Error('user account is blocked')
        }

        const compareResult = await bcrypt.compare(password, user.password)

        if(!compareResult){
            throw new Error('user password not match')
        }

        return user

    }catch(err){
        throw new Error(err.message)
    }

}


module.exports = { addNewUser, loginUser  }