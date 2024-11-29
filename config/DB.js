const mongoose = require('mongoose');
require('dotenv').config();
     uri= process.env.MONGODB_URI;
   
     const connectDB = async () => {
        try { await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000,connectTimeoutMS:50000,  }); 
        console.log('MongoDB Atlas connected'); } 
        catch (error) { 
            console.error('MongoDB connection error:', error);  
        }
    } 

module.exports = connectDB;    