const express = require('express');
const { createPaymentIntent,chargePayment, handleWebhook } = require('../controllers/PaymentController');
const router = express.Router();

router.post('/create-payment-intent', createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);
router.post('/charge', chargePayment);  // New route for handling charge




module.exports = router;
