
const dotenv = require('dotenv');
dotenv.config(); //process ==> process.env

const PORT = process.env.PORT;
const app = require('./app');



app.listen(PORT)