const { generateFibonacci, filterPrimes, calculateHCF, calculateLCM } = require('../utils/mathUtils');
const { getAIResponse } = require('../utils/aiUtils');

const OFFICIAL_EMAIL = process.env.OFFICIAL_EMAIL || "pulkit0940.be23@chitkara.edu.in";

const handleBfhl = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                is_success: false,
                official_email: OFFICIAL_EMAIL,
                error: "Request body is required"
            });
        }

        const keys = Object.keys(req.body);
        const validKeys = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
        const providedValidKeys = keys.filter(k => validKeys.includes(k));

        if (providedValidKeys.length === 0) {
            return res.status(400).json({
                is_success: false,
                official_email: OFFICIAL_EMAIL,
                error: `Invalid key. Must provide exactly one of: ${validKeys.join(', ')}`
            });
        }

        if (providedValidKeys.length > 1) {
            return res.status(400).json({
                is_success: false,
                official_email: OFFICIAL_EMAIL,
                error: "Request must contain exactly one functional key"
            });
        }

        const key = providedValidKeys[0];
        const value = req.body[key];
        let data;

        switch (key) {
            case 'fibonacci':
                if (typeof value !== 'number' || !Number.isInteger(value)) {
                    return res.status(400).json({
                        is_success: false,
                        official_email: OFFICIAL_EMAIL,
                        error: "Fibonacci input must be an integer"
                    });
                }

                data = generateFibonacci(value);
                break;

            case 'prime':
                if (!Array.isArray(value)) {
                    return res.status(400).json({
                        is_success: false,
                        official_email: OFFICIAL_EMAIL,
                        error: "Prime input must be an array"
                    });
                }

                data = filterPrimes(value);
                break;

            case 'hcf':
                if (!Array.isArray(value)) {
                    return res.status(400).json({
                        is_success: false,
                        official_email: OFFICIAL_EMAIL,
                        error: "HCF input must be an array"
                    });
                }

                data = calculateHCF(value);
                break;

            case 'lcm':
                if (!Array.isArray(value)) {
                    return res.status(400).json({
                        is_success: false,
                        official_email: OFFICIAL_EMAIL,
                        error: "LCM input must be an array"
                    });
                }

                data = calculateLCM(value);
                break;

            case 'AI':
                if (typeof value !== 'string') {
                    return res.status(400).json({
                        is_success: false,
                        official_email: OFFICIAL_EMAIL,
                        error: "AI input must be a string"
                    });
                }

                data = await getAIResponse(value);
                break;
        }

        res.status(200).json({
            is_success: true,
            official_email: OFFICIAL_EMAIL,
            data: data
        });
    } catch (error) {
        console.error('Error processing request:', error);

        res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: error.message || "Processing failed"
        });
    }
};

const handleHealth = (req, res) => {
    res.status(200).json({
        is_success: true,
        official_email: OFFICIAL_EMAIL
    });
};

module.exports = {
    handleBfhl,
    handleHealth
};
