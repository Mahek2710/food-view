// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cors = require('cors');


const app = express();
app.use(cookieParser());
app.use(express.json()); //middleware to parse JSON request body,frontend se data aata hai but server usse padh nhi paata , hence this middleware is used
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
}));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/auth' , authRoutes);
app.use('/api/food' , foodRoutes);

module.exports = app;

