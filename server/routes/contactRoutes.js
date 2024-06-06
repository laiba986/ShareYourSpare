// server/routes/contactRoutes.js

const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', contactController.createContact);

module.exports = router;
