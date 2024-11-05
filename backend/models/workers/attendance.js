const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    workerId:{type:Schema.Types.ObjectId,ref:'Worker'},

    shift:{type:String, enum: ['day', 'night'], required:true},

    point:{type:String,required:true},

    date:{type:String,required:true},

    count:{type:Number , default:1 },
    
    createdAt:{type:Date , default : Date.now},

});

const Attendance = mongoose.model('Attendance',attendanceSchema);
module.exports = Attendance;