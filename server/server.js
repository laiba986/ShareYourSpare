const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', contactRoutes);

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
