const express = require('express');
const router = express.Router();

// Simple Chatbot Logic
router.post('/query', (req, res) => {
    const { message } = req.body;
    const lowerMsg = message.toLowerCase();

    let reply = "I'm sorry, I didn't understand that. You can ask about our services, timings, or book an appointment.";

    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
        reply = "Hello! I am Dr. Rocky's virtual assistant. How can I help you today?";
    } else if (lowerMsg.includes('time') || lowerMsg.includes('open')) {
        reply = "Our clinic is open Monday to Saturday, 10:00 AM to 8:00 PM.";
    } else if (lowerMsg.includes('book') || lowerMsg.includes('appointment')) {
        reply = "You can book an appointment directly through our website. Click on the 'Book Appointment' button.";
    } else if (lowerMsg.includes('service') || lowerMsg.includes('treat')) {
        reply = "We offer General Consultation, Diabetes Management, Pediatric Care, and more. Check our Services page.";
    } else if (lowerMsg.includes('fee') || lowerMsg.includes('cost')) {
        reply = "Consultation fees start at ₹500. Online consultation plans are also available.";
    }

    res.json({ reply });
});

module.exports = router;
