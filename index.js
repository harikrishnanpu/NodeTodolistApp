
const dotenv = require('dotenv');
dotenv.config(); //process ==> process.env
const { connectMongo } = require('./config/db');

const PORT = process.env.PORT;


connectMongo().then(()=> {
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})

const app = require('./app');



app.listen(PORT)