require('dotenv').config();

const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error: ', err);
    }
};

module.exports = connectToDatabase;
