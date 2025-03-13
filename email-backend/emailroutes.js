const express = require('express');
const { sendEmail } = require('./emailcontroller');

const router = express.Router();

// Email Inquiry Route
router.post('/send', sendEmail);

module.exports = router;
