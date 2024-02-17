







const express = require('express');
const { addCartfinal,getCartsByEmailfinal, deleteCartsByEmailfinal } = require('../controller/Final.Controller');
const auth=require('../middleware/autherization')
const router = express.Router();

// Route to add a new cart
router.post('/final',addCartfinal);
router.get('/get/:email', getCartsByEmailfinal);
router.delete('/delete/:email', deleteCartsByEmailfinal); 




module.exports = router;
