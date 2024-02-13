const EventModel = require('../database/eventInfoSchema');

// Controller to handle the creation of a new event
const createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        console.log(eventData);

        // Check if an event with the same email and isRunning: true already exists
        const existingEvent = await EventModel.findOne({ email: eventData.email, isRunning: true });

        if (existingEvent) {
            // Event with the same email and isRunning: true already exists
            return res.status(400).json({ error: 'Event is already running for this email.' });
        }

        // If not, proceed to create a new event
        const newEvent = await EventModel.create(eventData);
        res.status(201).json(newEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Controller to retrieve all events
const getEventsByEmail = async (req, res) => {
    try {
        const organizerEmail = req.params.email;
        const events = await EventModel.find({ email: organizerEmail });

        if (events.length === 0) {
            return res.status(404).json({ error: 'No events found for the given email.' });
        }

        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteEventsByEmail = async (req, res) => {
    try {
        const organizerEmail = req.params.email;
        const deletedEvents = await EventModel.deleteMany({ email: organizerEmail });

        if (deletedEvents.deletedCount === 0) {
            return res.status(404).json({ error: 'No events found for the given email.' });
        }

        res.status(200).json({ message: `Events for ${organizerEmail} deleted successfully.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { createEvent, getEventsByEmail,deleteEventsByEmail };
