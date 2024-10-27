require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not set

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.JWT_SECRET);
});
