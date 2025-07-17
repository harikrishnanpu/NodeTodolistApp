
// ==> express ==> req,res,next

const harisession = require('express-session');

// server ==> memmory ==> session

const app = require('express')();

app.set('view engine','ejs');

// ==> toeken ==> verify ==> server ==> session ==> session  

app.use(harisession({ //==> COOCKIE ==/. TOKEN => TOKENID ==> session
    secret: 'MY-SECRET',
    name: 'harikrishnan.sid', //==?> conncect.sid
    saveUninitialized: false,
    resave: true, // when session. ==> change ==> re saving the session token
})) // ==> req , res , next
// express => views


app.get('/signup',(req,res)=>{
    console.log(req.session.harikrishnan);
    res.render('user/signup')
});



app.listen(3000);