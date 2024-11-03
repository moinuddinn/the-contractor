const mongoose = require('mongoose');

const salarySchema = new Schema({
    worker:{type:Schema.Types.ObjectId,ref:'Worker'},

    date:{type:String},

    amount:{type:String,required:true},
    type:{type:String, default:'Salary'},
    createdAt:{type:Date , default : Date.now},

});

const Salary = mongoose.model('Salary',salarySchema);
module.exports = Salary;