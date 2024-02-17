// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartsData.Controller');
const { deleteCartsByEmail } = require('../controller/CartsData.Controller');



router.post('/add', cartController.addCart);
router.get('/getByEmail/:email', cartController.getcartsdatabyEmail);
router.delete('/carts/:email', deleteCartsByEmail);
router.delete('/carts/deleteByObjects', cartController.deleteCartsByObjects);


module.exports = router;
