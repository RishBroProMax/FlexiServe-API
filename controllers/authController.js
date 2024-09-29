const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Register User and Generate API Key
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const apiKey = crypto.randomBytes(16).toString('hex');
        const user = new User({ username, email, password: hashedPassword, apiKey });

        await user.save();
        res.json({ apiKey });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// User Login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, apiKey: user.apiKey });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
