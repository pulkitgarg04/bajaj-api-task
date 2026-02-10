const express = require('express');
const router = express.Router();
const { handleBfhl, handleHealth } = require('../controllers/bfhlController');

router.get('/', (req, res) => {
    res.status(200).json({
        is_success: true,
        official_email: "pulkit0940.be23@chitkara.edu.in"
    });
});
router.post('/bfhl', handleBfhl);
router.get('/health', handleHealth);

module.exports = router;
