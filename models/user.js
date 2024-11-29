const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
// Define the user schema
const userSchema = new mongoose.Schema({
    userId: {
         type: String, 
         default: uuidv4, 
         unique: true

    },
    name: {

        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
         type: String,
         enum: ['admin', 'user', 'patient'],
         default: 'user',
         required: true,
    },
     password: { 
        type: String,
        required: true,
     }
},
{
    timestamps: true,
}
);

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;