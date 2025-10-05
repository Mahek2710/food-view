const FoodPartner = require('../models/foodPartner.model');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// =======================
// User Functions
// =======================

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, address, contactName } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'Full name, email and password are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      phone,
      address,
      contactName
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// =======================
// Food Partner Functions
// =======================

// Register Food Partner
exports.registerFoodPartner = async (req, res) => {
  try {
    const { name, email, password, contactName, phone, address } = req.body;

    if (!name || !email || !password || !contactName || !phone || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingFoodPartner = await FoodPartner.findOne({ email });
    if (existingFoodPartner) {
      return res.status(400).json({ message: 'Food partner already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFoodPartner = new FoodPartner({
      name,
      email,
      password: hashedPassword,
      contactName,
      phone,
      address,
    });

    await newFoodPartner.save();

    const token = jwt.sign({ id: newFoodPartner._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true });

    res.status(201).json({
      message: 'Food partner registered successfully',
      foodPartner: {
        id: newFoodPartner._id,
        name: newFoodPartner.name,
        email: newFoodPartner.email,
        contactName: newFoodPartner.contactName,
        phone: newFoodPartner.phone,
        address: newFoodPartner.address,
      },
      token,
    });
  } catch (error) {
    console.error('Error in registerFoodPartner:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login Food Partner
exports.loginFoodPartner = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const foodPartner = await FoodPartner.findOne({ email });
    if (!foodPartner) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, foodPartner.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: foodPartner._id, email: foodPartner.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true });

    res.status(200).json({
      message: 'Login successful',
      foodPartner: {
        id: foodPartner._id,
        name: foodPartner.name,
        email: foodPartner.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error in loginFoodPartner:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// =======================
// Logout Functions
// =======================

// Logout User
exports.logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'User logged out successfully' });
};

// Logout Food Partner
exports.logoutFoodPartner = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Food partner logged out successfully' });
};
