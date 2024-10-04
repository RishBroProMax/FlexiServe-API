# 🚀 FlexiServe API 🔑
> Fully optimized and useful API with services and API documentation in JavaScript. It provides multiple functionalities like Weather Information, Currency Conversion, User Authentication, and more. We use Swagger UI to generate user-friendly documentation. Made by MINUDI's love ❤.

## 🌟 Features
<li>🔑 User Authentication & API Key generation
<li>☁️ Weather Information: Get real-time weather updates for any city.
<li>💱 Currency Conversion: Convert currency between any two countries.
<li>📊 Swagger API Documentation: Easily explore all API endpoints with user-friendly Swagger UI.
<li>⚡️ Super Fast & Secure: Powered by Express, secured with JWT.

# 📚 API Documentation
>Full API documentation can be accessed via Swagger UI:

[API Documentation Link](lol.lol)


# 🛠️ How to Run the Project
## 1. Clone the Repository

`git clone https://github.com/RishBroProMax/FlexiServe-API.git
cd FlexiServe-API`

## 2. Install Dependencies

`npm install`

## 3. Set Up Environment Variables
Create a .env file in the root of the project and add the following: <br>
```
MONGO_URI=your_mongodb_uri 
JWT_SECRET=your_jwt_secret
WEATHER_API_KEY=your_weather_api_key
PORT=5000
```
Note: You will need a MongoDB connection string and an API key for weather data. You can get the weather API key from OpenWeather.

## 4. Run the Server

`node app.js`

The server should now be running at http://localhost:5000.

## 5. Access Swagger API Docs
Visit the Swagger UI to view and test the API routes at:

`http://localhost:5000/api-docs`

# 💻 Deployment
To deploy this API on Render or Heroku, follow these steps:

## Render Deployment
1.Create a New Web Service on Render. <br>
2.Link your GitHub repository. <br>
3.Set up environment variables under the "Environment" section.<br>
4.Click Deploy and wait for the service to go live!<br>

# 🚀 Endpoints & Services
## Authentication Routes:
`POST /api/auth/register: Register a new user.`
`POST /api/auth/login: Login and get an API key and token.`

## Weather Service:
`GET /api/services/weather?city=cityname: Get weather for a specified city.`

## Currency Conversion:
`GET /api/services/currency?amount=100&from=USD&to=EUR: Convert currency from one type to another.`
