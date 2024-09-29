const axios = require('axios');

exports.getWeather = async (req, res) => {
    const { city } = req.query;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching weather' });
    }
};

exports.convertCurrency = async (req, res) => {
    const { amount, from, to } = req.query;
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const rate = response.data.rates[to];
        const converted = amount * rate;
        res.json({ amount, from, to, converted });
    } catch (err) {
        res.status(500).json({ message: 'Error converting currency' });
    }
};
