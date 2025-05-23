const express = require('express');
const { createPaymentIntent, chargePayment } = require('../controllers/PaymentController');
const router = express.Router();
router.post('/create-payment-intent', createPaymentIntent);
router.post('/charge', chargePayment);
// router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

module.exports = router;