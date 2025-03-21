const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST,
  port: process.env.ZOHO_PORT,
  secure: process.env.ZOHO_SECURE === 'true', // Secure SMTP

  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

module.exports = transporter;

