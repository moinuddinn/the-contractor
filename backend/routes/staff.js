const express = require('express');
const app = express();
const router = express.Router();
const {signup, login,logout,refreshtoken} = require('../controllers/staffAuth');

router.post('/signup',signup);
router.post('/login',login);
// router.post('/logout/:id',logout);
router.post('/logout/',logout);

router.post('/refreshtoken/',refreshtoken);




module.exports = router;



