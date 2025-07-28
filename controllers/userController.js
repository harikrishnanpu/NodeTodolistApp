const { addNewUser, loginUser } = require("../services/userServices");
const jwt = require('jsonwebtoken')



const renderLandingPage= async (req,res) => {
    res.render('user/landing')
 }

const renderHomePage = async (req,res) => {
    res.render('user/home')
}


const renderSignupPage = async (req,res) =>{
    res.render('user/signup')
}


const registerNewUser = async (req,res) => {
    try{

        const { username, email, password } = req.body;

        console.log(req.body);
        

        if(!username.trim() || !email.trim() || !password.trim()){
            return res.status(400).json({message: 'all fields are required',success:false})
        }

        const user = await addNewUser(req.body); // function ==> throw ==> goes to the catch block of this function

        // ==== user created ======

        const token = jwt.sign({ userId:  user._id }, process.env.JWT_SECRET)

        res.cookie('HariToken', token, {
            maxAge: 24 * 60 * 60 * 1000 , 
            httpOnly: true,
            sameSite: 'Strict'
        } )

        res.status(201).json({ message: 'user created successfully', success: true  })

    }catch(err){

        console.log(err);
        
        res.status(500).json({message: err.messge, success: false  })

    }
}



const renderLoginPage = async (req,res) => {

    try{
        res.render('user/login')
    }catch(err){
        res.status(500).json({message: err.message, success: false})

    }

}


const loginUserAccount = async (req,res) => {
    try{

        const { email , password  } = req.body;

        if(!email.trim() || !password.trim()){
            throw new Error('all fields are required')
        }

        const user = await loginUser(req.body);

        const token = jwt.sign({ userId:  user._id }, process.env.JWT_SECRET)

        res.cookie('HariToken', token, {
            maxAge: 24 * 60 * 60 * 1000 , 
            httpOnly: true,
            sameSite: 'Strict'
        })

        res.status(200).json({message: 'user logged in', succes: true})

    }catch(err){

        res.status(500).json({message: err.message, succes: false})

    }
}


module.exports = { renderLandingPage,  renderSignupPage , registerNewUser, renderLoginPage , loginUserAccount, renderHomePage};
