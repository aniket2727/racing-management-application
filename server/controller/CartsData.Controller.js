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

    console.log(email, name, firstName1, firstName2, ownerName1, ownerName2, contactNumber, cartName);

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
    console.log("data bt emails sended",carts)
    res.status(200).json({ success: true, data: carts });
  } catch (error) {
    console.error('Error getting carts:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


const deleteCartsByEmail = async (req, res) => {
  try {
    const userCarts = await Cart.deleteMany({ email: req.params.email });
    console.log("deleted all carts",userCarts)

    if (userCarts.deletedCount === 0) {
      return res.status(404).json({ error: 'No carts found for the given email.' });
    }

    res.status(200).json({ message: 'Carts deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteCartsByObjects = async (req, res) => {
  try {
    const { carts } = req.body;

    // Validate if carts is an array
    if (!Array.isArray(carts) || carts.length === 0) {
      return res.status(400).json({ error: 'Invalid or empty carts array.' });
    }

    // Extract cart IDs from the array
    const cartIds = carts.map(cart => cart._id);

    // Delete carts by IDs
    const deletedCarts = await Cart.deleteMany({ _id: { $in: cartIds } });

    console.log(`Deleted ${deletedCarts.deletedCount} carts with IDs: ${cartIds}`);

    if (deletedCarts.deletedCount === 0) {
      return res.status(404).json({ error: 'No carts found for the given cart objects.' });
    }

    res.status(200).json({ message: 'Carts deleted successfully!' });
  } catch (error) {
    console.error('Error deleting carts by objects:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addCart, getcartsdatabyEmail, deleteCartsByEmail, deleteCartsByObjects };
