const User = require('../models/userModel');

exports.apiKeyAuth = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) return res.status(403).json({ message: 'API key missing' });

    const user = await User.findOne({ apiKey });
    if (!user) return res.status(401).json({ message: 'Invalid API key' });

    req.user = user;
    next();
};
