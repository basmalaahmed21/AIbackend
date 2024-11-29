const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const measurmentSchema = new mongoose.Schema({
    Id: {
        type: String, 
        default: uuidv4, 
        unique: true

   },
   type: {

       type: String,
       required: true,
   },
  
    patientId:{
        type: Number,
    },
     value: {
        type: Number,
    },
    time:{
        type: Number,
    },
    
},
{
    timestamps: true,
}
);
const Measurment= mongoose.model('Measurment', measurmentSchema);

module.exports = Measurment;