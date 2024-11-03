// Import the Mongoose library
const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		father: {
			type: String,
			trim: true,
		},

		aadharNumber: {
			type: Number,
			trim: true,
		},
		panCardNumber: {
			type: String,
			trim: true,
		},
		bank: {
			accountNumber: {
			  type: String,
			},
			ifscCode: {
			  type: String,
			},
			bankName: {
			  type: String,
			},
			branch: {
			  type: String,
			}
		  },
		attendanceRecords: [{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Attendance'
		}],
		paymentRecords:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Payment'
		}],  
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("Worker", userSchema);