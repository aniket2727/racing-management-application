


const Event = require('../database/cartsDataSchema');

// Controller to create a new event
// Controller to add an event
const addEvent = async (req, res) => {
    try {
        const eventData = req.body;
        
        // Check if bull names already exist
        const existingEvent = await Event.findOne({
            'carts.bullName1': eventData.carts[0].bullName1,
            'carts.bullName2': eventData.carts[0].bullName2,
        });

        if (existingEvent) {
            // Bulls are already registered
            return res.status(400).json({ success: false, error: 'Bulls are already registered' });
        }

        const event = new Event(eventData);
        await event.save();
        res.status(201).json({ success: true, message: 'Event added successfully' });
    } catch (error) {
        console.error('Error adding event:', error.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
  
  // Controller to get events by email
  const getEventsByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const events = await Event.find({ 'creator.email': email });
      res.status(200).json({ success: true, data: events });
    } catch (error) {
      console.error('Error getting events:', error.message);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };
  
  module.exports = { addEvent, getEventsByEmail };