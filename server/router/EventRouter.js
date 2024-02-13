const express = require('express');
const router = express.Router();
const eventController = require('../controller/Event.Controller');

// Route to create a new event
router.post('/events', eventController.createEvent);

// Route to get  events   bu ids
router.get('/events/:email', eventController.getEventsByEmail);

//Route to delete event
router.delete('/events/:email', eventController.deleteEventsByEmail);

module.exports = router;
