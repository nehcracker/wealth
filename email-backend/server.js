const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./emailroutes');
const errorHandler = require('./errorhandling');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
    cors({
        origin: "https://wealthfortune.site",
        credentials: true,
        methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/email', emailRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
