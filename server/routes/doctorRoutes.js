const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const Appointment = require('../models/Appointment');
const User = require('../models/User');

// @desc    Get Dashboard Stats
// @route   GET /api/doctor/stats
// @access  Private/Admin
router.get('/stats', protect, admin, async (req, res) => {
    const totalPatients = await User.countDocuments({ role: 'patient' });
    const totalAppointments = await Appointment.countDocuments();
    const pendingAppointments = await Appointment.countDocuments({ status: 'pending' });

    res.json({
        totalPatients,
        totalAppointments,
        pendingAppointments,
    });
});

module.exports = router;
