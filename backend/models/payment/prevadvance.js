const mongoose = require("mongoose");

const prevadvanceSchema = new mongoose.Schema({
  workerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker'}, // workerSchemaRelation
  paymentDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  type: { type: String } // Specify type as needed (e.g., "advance", etc.)
});

module.exports = mongoose.model('PrevAdvance', prevadvanceSchema);
