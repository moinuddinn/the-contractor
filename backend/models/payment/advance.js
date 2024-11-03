const mongoose = require('mongoose');

const advanceSchema = new Schema({
    worker:{type:Schema.Types.ObjectId,ref:'Worker'},

    date:{type:String},

    amount:{type:String,required:true},
    type:{type:String, default:'Advance'},
    createdAt:{type:Date , default : Date.now},

});

const Advance = mongoose.model('Advance',advanceSchema);
module.exports = Advance;