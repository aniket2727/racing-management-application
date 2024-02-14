


const mongoose = require('mongoose');

// Define schema for carts
const CartSchema = new mongoose.Schema({
    bullName1: { type: String, required: true },
    bullName2: { type: String, required: true },
    ownerName1: { type: String, required: true },
    ownerName2: { type: String, required: true },
    cartName: { type: String, required: true },
});

// Define schema for events
const EventSchema = new mongoose.Schema({
    creator: {
        email: { type: String, required: true },
        name: { type: String, required: true },
    },
    carts: [CartSchema], // Embed CartSchema within EventSchema
    // Other event-related fields
});

// Create a model using the schema
const Event = mongoose.model('cartsData', EventSchema);

module.exports = Event;
