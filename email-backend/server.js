const express = require('express');
const transporter = require('./emailconfig');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

// Test email sending endpoint
app.post('/test-email', async (req, res) => {
    const mailOptions = {
        from: process.env.ZOHO_USER,
        to: process.env.DEFAULT_TO,
        subject: 'Test Email',
        text: 'This is a test email to verify the email server configuration.',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Test email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send test email.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
