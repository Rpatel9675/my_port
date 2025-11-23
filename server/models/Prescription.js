const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema(
    {
        appointment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        diagnosis: { type: String, required: true },
        medicines: [
            {
                name: String,
                dosage: String,
                frequency: String, // e.g., 1-0-1
                duration: String,
                instructions: String,
            },
        ],
        testsRecommended: [String],
        advice: String,
        followUpDate: Date,
    },
    {
        timestamps: true,
    }
);

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
