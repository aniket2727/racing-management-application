// controllers/cartController.js
const Cart = require('../database/cartsDataSchema');

const addCart = async (req, res) => {
  try {
    const {
      email,
      name,
      firstName1,
      firstName2,
      ownerName1,
      ownerName2,
      contactNumber,
      cartName,
    } = req.body;

    console.log( email,
      name,
      firstName1,
      firstName2,
      ownerName1,
      ownerName2,
      contactNumber,
      cartName)

    const newCart = new Cart({
      email,
      name,
      firstName1,
      firstName2,
      ownerName1,
      ownerName2,
      contactNumber,
      cartName,
    });

    const savedCart = await newCart.save();

    // Additional logic if needed

    res.status(201).json({ success: true, data: savedCart });
  } catch (error) {
    console.error('Error adding cart data:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Controller to get carts by email
const getcartsdatabyEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const carts = await Cart.find({ email });
    res.status(200).json({ success: true, data: carts });
  } catch (error) {
    console.error('Error getting carts:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = { addCart, getcartsdatabyEmail };
