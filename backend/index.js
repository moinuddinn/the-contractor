require('dotenv').config();

const express = require('express');
const app = express();
const connectToDatabase = require('./config/db');
const bodyparser = require('body-parser');
const cors = require('cors');
const staffroute = require('./routes/staff/staff');

connectToDatabase();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT; // Fallback to 3000 if PORT is not set

app.use('/api/staff/',staffroute);






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.JWT_SECRET);
});
