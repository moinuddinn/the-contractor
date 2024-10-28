const express = require('express');
const app = express();
const router = express.Router();
const {signup, login,logout} = require('../../controllers/staff/staffAuth');

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);



module.exports = router;



