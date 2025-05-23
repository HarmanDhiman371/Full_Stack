const express=require('express');
const app=express();
const mysql = require("mysql2");
require('dotenv').config();

const port=5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = mysql.createConnection({
    host: process.env.DB_HOST,
   
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});


module.exports = db;