

const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL

async function connectMongo() {
    try{
        await mongoose.connect(MONGODB_URL)
        return true        
    }catch(err){
        throw new Error(err)
    }

}

module.exports = { connectMongo  };