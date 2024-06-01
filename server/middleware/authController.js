// server/controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Donor } = require('../models');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newDonor = await Donor.create({ name, email, password: hashedPassword });
    res.status(201).send({ message: 'User registered successfully', donor: newDonor });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const donor = await Donor.findOne({ where: { email } });

    if (!donor) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const isValid = await bcrypt.compare(password, donor.password);

    if (!isValid) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: donor.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
};
