const mongoose = require('mongoose');

const paymentSchema = new Schema({
    worker:{type:Schema.Types.ObjectId,ref:'Worker'},

    salaryRecords:[{type:Schema.Types.ObjectId,ref:'Salary'}],
   
    advanceRecords:[{type:Schema.Types.ObjectId,ref:'Advance'}],

    prevadvanceRecords:[{type:Schema.Types.ObjectId,ref:'PrevAdvance'}],

    date:{type:String},
    
    createdAt:{type:Date , default : Date.now},

});

const Payment = mongoose.model('Payment',paymentSchema);
module.exports = Payment;