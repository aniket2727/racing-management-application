




const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    organizerName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    }
});
 

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;
