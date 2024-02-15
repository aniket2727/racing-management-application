







const express = require('express');
const {  addCartfinal,
    getCartsByEmailfinal, } = require('../controller/Final.Controller');
const auth=require('../middleware/autherization')
const router = express.Router();

// Route to add a new cart
router.post('/final',auth, addCartfinal);

// Route to get carts by email
router.get('/get/:email', auth, getCartsByEmailfinal);

module.exports = router;
