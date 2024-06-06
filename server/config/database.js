const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin12345', // replace 'your_password' with your actual password
    database: 'donation_db', // specify the database you want to connect to
    port: 3301
});

// Connect to the database
pool.getConnection((err, connection) => {
    if (err) {
        return console.error("Error connecting: " + err.stack);
    }
    console.log("Connected to MySQL as id " + connection.threadId);
    // Do something with the connection
    // Don't forget to release the connection when finished
    connection.release();
});
