// server/controllers/contactController.js

const Contact = require('../models/contact');

exports.createContact = (req, res) => {
  const { name, email, subject, message } = req.body;
  Contact.create({ name, email, subject, message }, (err, result) => {
    if (err) {
      console.error('Error saving contact:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).send('Message sent successfully');
  });
};
