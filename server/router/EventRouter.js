// eventRouter.js
const express = require('express');
const router = express.Router();
const eventController = require('../controller/Event.Controller');
const authenticateToken = require('../middleware/autherization');

// Use the authentication middleware for all event routes
router.use(authenticateToken);

// Route to create a new event
router.post('/events', eventController.createEvent);

// Route to get events by organizer's email
router.get('/events/:email', eventController.getEventsByEmail);

// Route to delete events by organizer's email
router.delete('/events/:email', eventController.deleteEventsByEmail);

module.exports = router;
