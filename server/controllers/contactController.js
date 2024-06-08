const db = require('../config/database');

function getAllContacts(req, res) {
    db.pool.getConnection((err, connection) => {
        if (err) {
            console.error("Error connecting: " + err.stack);
            return res.status(500).json({ message: 'Error connecting to the database' });
        }

        connection.query('SELECT * FROM contacts', (err, results) => {
            // It's important to release the connection here in case of an error as well
            if (err) {
                connection.release(); // Make sure to release the connection before sending the response
                console.error("Query error: " + err.stack);
                return res.status(500).json({ message: 'Error executing the query' });
            }

            connection.release(); // Release the connection back to the pool
            console.log('Contacts:', results);
            res.json(results); // Send the results back to the client
        });
    });
}

module.exports = {
    getAllContacts
};