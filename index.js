const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', bfhlRoutes);

app.use((req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        is_success: false,
        error: "Internal server error"
    });
});

const OFFICIAL_EMAIL = process.env.OFFICIAL_EMAIL || "pulkit0940.be23@chitkara.edu.in";
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Official Email: ${OFFICIAL_EMAIL}`);
    console.log("Gemini API Key is configured");
});