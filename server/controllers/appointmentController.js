const Appointment = require('../models/Appointment');
const Razorpay = require('razorpay');

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private
const createAppointment = async (req, res) => {
    const {
        patientName,
        patientPhone,
        date,
        timeSlot,
        type,
        reason,
    } = req.body;

    const appointment = new Appointment({
        user: req.user._id,
        patientName,
        patientPhone,
        date,
        timeSlot,
        type,
        reason,
        status: 'pending',
    });

    const createdAppointment = await appointment.save();
    res.status(201).json(createdAppointment);
};

// @desc    Get logged in user appointments
// @route   GET /api/appointments/my
// @access  Private
const getMyAppointments = async (req, res) => {
    const appointments = await Appointment.find({ user: req.user._id });
    res.json(appointments);
};

// @desc    Create Razorpay Order
// @route   POST /api/appointments/create-payment
// @access  Private
const createPaymentOrder = async (req, res) => {
    const { amount } = req.body;

    // Initialize Razorpay (Mock keys if not provided)
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_123456',
        key_secret: process.env.RAZORPAY_KEY_SECRET || 'secret123',
    });

    const options = {
        amount: amount * 100, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_74394",
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createAppointment, getMyAppointments, createPaymentOrder };
