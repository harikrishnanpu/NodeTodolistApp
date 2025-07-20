

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


module.exports = { renderSignupPage,
    signup
 };