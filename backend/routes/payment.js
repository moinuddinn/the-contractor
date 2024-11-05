const express = require('express');
const router = express.Router();
const { CreateNewAdvance,CreatePrevAdvance,Createsalary  } = require('../controllers/payment');
const { protectedMiddlware } = require('../middleware/auth.middleware'); // Adjust the path as needed

// Use the logger middleware for the /create route
router.post('/advance/:workerId', CreateNewAdvance);
router.post('/prevadvance/:workerId', CreatePrevAdvance);
router.post('/salary/:workerId', Createsalary);

module.exports = router;
