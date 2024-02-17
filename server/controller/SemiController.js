
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
    console.log(email)
    const carts = await Cart.find({ email });
    console.log("get all semi final data",carts)
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

const semideleteCartsByObjects = async (req, res) => {
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

module.exports = {
  addCart,
  getCartsByEmail,
  semideleteCartsByEmail, // Adding the new controller function
  semideleteCartsByObjects,
};