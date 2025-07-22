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
        await user.save()

    }catch(err){
        throw new Error(err.message)
    }


}


module.exports = { addNewUser  }