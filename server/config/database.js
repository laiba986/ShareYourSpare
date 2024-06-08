const mysql = require('mysql2');
const dotenv = require('dotenv');
const e = require('express');
dotenv.config();


// Create a connection pool
const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password, // replace 'your_password' with your actual password
    database: process.env.database, // specify the database you want to connect to
    port: process.env.port,
});

// Connect to the database
pool.getConnection((err, connection) => {
    if (err) {
        return console.error("Error connecting: " + err.stack);
    }
    console.log("Connected to MySQL as id " + connection.threadId);
    // Do something with the connection
    // show table names of the current database along with the column names
    connection.query('SHOW TABLES', (err, results) => {
        if (err) {
            return console.error("Error querying: " + err.stack);
        }
        console.log(results);
    });
   
    // Don't forget to release the connection when finished
    connection.release();
});

module.exports = {
    pool
};