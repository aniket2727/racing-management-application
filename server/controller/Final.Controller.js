









const Cart = require('../database/finalschema');

// Controller to add a new cart
const addCartfinal = async (req, res) => {
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
const getCartsByEmailfinal = async (req, res) => {
  try {
    const { email } = req.params;
    const carts = await Cart.find({ email });
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controller to delete carts by email
const deleteCartsByEmailfinal = async (req, res) => {
  try {
    const { email } = req.params;
    
    // Delete all carts with the specified email
    const deletedCarts = await Cart.deleteMany({ email });

    // Check if any carts were deleted
    if (deletedCarts.deletedCount > 0) {
      res.status(200).json({ message: `Carts with email ${email} deleted successfully` });
    } else {
      res.status(404).json({ message: `No carts found with email ${email}` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCartfinal,
  getCartsByEmailfinal,
  deleteCartsByEmailfinal,
};


