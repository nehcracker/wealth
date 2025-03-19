const transporter = require("./emailconfig");

const sendEmail = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const mailOptions = {
            from: process.env.ZOHO_USER,
            to: process.env.DEFAULT_TO,
            cc: process.env.DEFAULT_CC,
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        };

        console.log("mailOptions", mailOptions);

        const result = await transporter.sendMail(mailOptions);
        console.log("result", result);
        res.status(200).json({
            success: true,
            message: "Email sent successfully!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { sendEmail };
