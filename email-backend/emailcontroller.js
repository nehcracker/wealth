const transporter = require('./emailconfig');

const sendEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const mailOptions = {
      from: process.env.ZOHO_USER,
      to: process.env.DEFAULT_TO,
      cc: process.env.DEFAULT_CC,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendEmail };
