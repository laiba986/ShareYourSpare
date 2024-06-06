// server/server.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
