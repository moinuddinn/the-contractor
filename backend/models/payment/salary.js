const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true }, // workerSchemaRelation
  paymentDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  type: { type: String} // Specify type as needed (e.g., "advance", etc.)
});

module.exports = mongoose.model('Salary', salarySchema);
