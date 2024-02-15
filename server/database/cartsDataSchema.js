


// models/Cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  firstName1: String,
  firstName2: String,
  ownerName1: String,
  ownerName2: String,
  contactNumber: String,
  cartName: { type: String, required: true },
  // Other fields as needed
});

const Cart = mongoose.model('addcarts', cartSchema);

module.exports = Cart;
