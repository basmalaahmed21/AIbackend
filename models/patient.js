const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const patientSchema = new mongoose.Schema({
    PatientId: {
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
   },
    password: { 
       type: String,
       required: true,
    },
    address:{
        type: String,
    },
    age: {
        type: Number,
    },
    gender:{
        type: String,
    },
},
{
    timestamps: true,
}
);
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;