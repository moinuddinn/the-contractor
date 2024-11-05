const express = require('express');
const router = express.Router();
const { CreateAttendance } = require('../controllers/attendance');
const { protectedMiddlware } = require('../middleware/auth.middleware'); // Adjust the path as needed

// Use the logger middleware for the /create route
router.post('/create', protectedMiddlware, CreateAttendance);

module.exports = router;
