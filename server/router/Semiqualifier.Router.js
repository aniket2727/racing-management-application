



const express = require('express');
const { addCart, getCartsByEmail } = require('../controller/SemiController');
const auth=require('../middleware/autherization')
const router = express.Router();

// Route to add a new cart
router.post('/semi', addCart);

// Route to get carts by email
router.get('/get/:email', getCartsByEmail);

module.exports = router;
