


const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName1: {
    type: String,
    required: true,
  },
  firstName2: {
    type: String,
    required: true,
  },
  cartName: {
    type: String,
    required: true,
  },
  ownerName1: {
    type: String,
    required: true,
  },
  ownerName2: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model('semi', cartSchema);

module.exports = Cart;
