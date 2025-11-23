const express = require('express');
const router = express.Router();
const { createAppointment, getMyAppointments, createPaymentOrder } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createAppointment);
router.route('/my').get(protect, getMyAppointments);
router.route('/create-payment').post(protect, createPaymentOrder);

module.exports = router;
