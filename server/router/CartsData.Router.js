// routes.js
const express = require('express');
const eventController = require('../controller/CartsData.Controller');
const authMiddleware = require('../middleware/autherization');

const router = express.Router();

// Route to add an event (protected with authMiddleware)
router.post('/add', authMiddleware, eventController.addEvent);

// Route to get events by email (protected with authMiddleware)
router.get('/get/:email', authMiddleware, eventController.getEventsByEmail);

module.exports = router;
