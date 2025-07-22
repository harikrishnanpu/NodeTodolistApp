const { addNewUser } = require("../services/userServices");


const renderSignupPage = async (req,res) =>{
    res.render('user/signup')
}
const signup = async(req,res) => {
    const {username, email,password, confirmPassword} = req.body;
    console.log('User submitte:', username, email, password, confirmPassword );

    if(email === "test@example.com" && password === '123456'){
        res.json({message: 'Sign in successfull'})
    } else {
        res.status(401).json({error:'Invalid credentials'})
    }
}



const registerNewUser = async (req,res) => {
    try{

        const { username, email, password } = req.body;

        console.log(req.body);
        

        if(!username.trim() || !email.trim() || !password.trim()){
            return res.status(400).json({message: 'all fields are required'})
        }


        const user = await addNewUser(req.body); // function ==> throw ==> goes to the catch block of this function


        res.status(201).json({ message: 'user created successfully', success: true  })



    }catch(err){

        res.status(500).json({message: err.messge, success: false  })

    }
}


module.exports = { renderSignupPage , registerNewUser };
