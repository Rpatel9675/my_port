const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // In a multi-doctor system. For single doctor, this is optional or fixed.
        },
        patientName: { type: String, required: true },
        patientPhone: { type: String, required: true },
        date: { type: Date, required: true },
        timeSlot: { type: String, required: true },
        type: {
            type: String,
            enum: ['clinic', 'online'],
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'completed', 'cancelled'],
            default: 'pending',
        },
        reason: String,
        paymentStatus: {
            type: String,
            enum: ['pending', 'paid', 'failed'],
            default: 'pending',
        },
        paymentId: String, // Razorpay Payment ID
        meetingLink: String, // For online consultation
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
