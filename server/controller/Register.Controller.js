



// register.controller.js
const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const User = require('../database/userinfoSchema');

router.post('/register', async (req, res) => {
  try {
    const { email, name, password } = req.body; // Use 'pass' instead of 'password'
    console.log("the data get from request", email, name, password)

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    // const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser = new User({
      email,
      name,
      password // Ensure the field name is 'pass'
    });
    const result = await newUser.save();
    res.status(201).json({ message: 'User registered successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
