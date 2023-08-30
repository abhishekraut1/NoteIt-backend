const mongoose = require('mongoose');

const connectToMongoose = async (mongoURI)=>{ 
    try{
        mongoose.set("strictQuery",false);
        mongoose.connect(`${mongoURI}`);
        console.log("Connected to Mongo Successfully!");
    }catch(err){
        console.log(err);
    }
} 

module.exports = connectToMongoose;