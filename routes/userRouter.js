

const express = require('express');
const userRouter = express.Router();

let user = {
    name: 'Hari Krishnan',
    age: 18
}


// userRouter.use((req,res,next)=>{
//     // req.session
//     // req.user = user
//     // next()
// })

// userRouter.get('/',(req,res)=> {
//      /// same ==>  req.session && req.user

//     //  req.user.address = { city: 'chengannur' , state: 'kerala'   }

//     res.send(req.user.address.state);
// });


userRouter.get('/',(req,res) => {
    req.session.user = "hari kishnan" // session ==>. server memmory
    res.send("Helloo Home page")
});



userRouter.get('/signup',(req,res)=>{
    res.render('signup');
});

userRouter.post('/signup', (req,res)=>{
    console.log("SIGNUP :POST",req.body);
    const { email , password   } = req.body;

    res.status(200).json({ user: { email,  password  } , success: true   })
})


userRouter.get('/harikrishnan', (req,res)=>{
    res.send("THIS IS HARIKRISHNAN PAGE")
});

userRouter.post('/harikrishnan', (req,res)=>{
    console.log(req.body);
    res.send("THIS IS HARIKRISHNAN PAGE POST")
});



userRouter.post('/add', (req,res)=>{
    const { count  } = req.body;
    req.session.count += count

    res.status(200).json({ count: req.session.count  })

})


userRouter.post('/minus', (req,res)=>{
    const { count  } = req.body;
    req.session.count += count

    res.status(200).json({ count: req.session.count  })

})







module.exports = userRouter;