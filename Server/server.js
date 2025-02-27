// require("dotenv").config();
require('dotenv').config();

const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const app = express();
app.use(express.json());

app.use("/api/orders", orderRoutes);
app.use("/api", userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments',  paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
