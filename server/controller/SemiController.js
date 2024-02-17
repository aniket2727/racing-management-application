
const Cart = require('../database/semiqSchema');
// Controller to add a new cart
const addCart = async (req, res) => {
  try {
    const { email, firstName1, firstName2, cartName, ownerName1, ownerName2 } = req.body;
    const newCart = new Cart({
      email,
      firstName1,
      firstName2,
      cartName,
      ownerName1,
      ownerName2,
    });

    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get carts by email
const getCartsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const carts = await Cart.find({ email });
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const semideleteCartsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const deleteResult = await Cart.deleteMany({ email });
    res.status(200).json({ message: `Deleted ${deleteResult.deletedCount} carts` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCart,
  getCartsByEmail,
  semideleteCartsByEmail, // Adding the new controller function
};