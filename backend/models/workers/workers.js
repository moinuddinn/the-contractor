// Import the Mongoose library
const mongoose = require("mongoose");

const workerschema = new mongoose.Schema(
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
		advanceRecords:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Advance'
		}],  
		prevadvancerecords:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:'PrevAdvance'
		}],
		SalaryRecords:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Salary'
		}]
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("Worker", workerschema);