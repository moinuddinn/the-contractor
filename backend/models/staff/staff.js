// Import the Mongoose library
const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');

const staffSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
	
		password: {
			type: String,
			required: true,
		},
		// Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
		role: {
			type: String,
			enum: ["admin", "supervisor",],
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
		approved: {
			type: Boolean,
			default: true,
		},
		additionalDetails: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Profile",
		},
		token: {
			type: String,
		}
		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);

//pre-save hooks to hash password before saving to database

staffSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next();

    try {
        const salt = await bcryptjs.genSalt(10);
        this.password = await bcryptjs.hash(this.password,salt);
        next();
    } catch (error) {
        next(error);
    }
})  

staffSchema.methods.comparePassword =async function(password){
    return bcryptjs.compare(password,this.password);
}

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("Staff", staffSchema);