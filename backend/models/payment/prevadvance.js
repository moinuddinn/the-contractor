const mongoose = require('mongoose');

const prevadvanceSchema = new Schema({
    worker:{type:Schema.Types.ObjectId,ref:'Worker'},

    date:{type:String},
    amount:{type:String,required:true},
    type:{type:String, default:'Previous Advance'},
    createdAt:{type:Date , default : Date.now},

});

const PreAdvance = mongoose.model('PrevAdvance',prevadvanceSchema);
module.exports = PreAdvance;