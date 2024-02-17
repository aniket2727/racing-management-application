



const express = require('express');
const { addCart, getCartsByEmail , semideleteCartsByEmail, } = require('../controller/SemiController');
const auth=require('../middleware/autherization')
const router = express.Router();

// Route to add a new cart
router.post('/semi', addCart);

// Route to get carts by email
router.get('/get/:email', getCartsByEmail);


router.delete('/delete/:email', semideleteCartsByEmail); // New route for deleting carts by email

module.exports = router;
