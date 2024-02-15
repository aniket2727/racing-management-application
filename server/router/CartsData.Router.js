// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartsData.Controller');

router.post('/add', cartController.addCart);
router.get('/getByEmail/:email', cartController.getcartsdatabyEmail);

module.exports = router;
