const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
    fatherName: {
        type: String,
        trim: true,
    },
	gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
    image: {
        type: String,
    },
});


// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);