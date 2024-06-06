const db = require('../config/database');

const Contact = {
  create: (data, callback) => {
    const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [data.name, data.email, data.subject, data.message], callback);
  }
};

module.exports = Contact;
