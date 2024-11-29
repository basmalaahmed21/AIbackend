const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const robotStatusSchema = new mongoose.Schema({
    Id: {
        type: String, 
        default: uuidv4, 
        unique: true

   },
   command: {

       type: String,
    //    required: true,
   },
     status: {
        type: String,
    },
 
    
},
{
    timestamps: true,
}
);
const RobotStatus= mongoose.model('RobotStatus', robotStatusSchema);

module.exports = RobotStatus;