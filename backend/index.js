require('dotenv').config();

const express = require('express');
const app = express();
const connectToDatabase = require('./config/db');
const cors = require('cors');
const staffroute = require('./routes/staff');
const attendanceRoute = require('./routes/attendance');
const paymentRoute = require('./routes/payment');


const cookieParser = require('cookie-parser');

connectToDatabase();


app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT; 

app.use('/api/staff/',staffroute);
app.use('/api/attendance/',attendanceRoute);
app.use('/api/add-new/',paymentRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.JWT_SECRET);
});
