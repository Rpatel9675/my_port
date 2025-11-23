import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! 👋 I'm Rocky's AI assistant. I can help you learn about his skills, experience, projects, and more. What would you like to know?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();

        // Greetings
        if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
            return "Hello! 👋 Nice to meet you! I can tell you about Rocky's skills, experience, projects, education, or how to contact him. What interests you?";
        }

        // Skills-related responses
        if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || lowerMessage.includes('what can') || lowerMessage.includes('know')) {
            return "Rocky is proficient in:\n\n🔧 **Embedded Systems:**\n• Android Automotive IVI\n• BSP Development\n• Embedded Linux\n• Bluetooth, WiFi, Ethernet\n• USB Protocols, Kernel IPC\n\n💻 **Full-Stack Development:**\n• Frontend: React, Next.js, Redux, TypeScript\n• Backend: Node.js, Express, GraphQL\n• Databases: MongoDB, PostgreSQL, MySQL, Firebase\n\n📱 **Languages:**\nC, C++, Python, Java, Kotlin, JavaScript, TypeScript, SQL\n\n🛠️ **Tools:**\nGit, Docker, Linux, VS Code, Postman, Figma, Jira\n\nWould you like to know more about any specific area?";
        }

        // Experience-related
        if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
            return "Rocky has diverse experience in:\n\n🚗 **Embedded Systems:**\n• Android Automotive IVI development\n• BSP (Board Support Package) development\n• Embedded Linux systems\n\n🌐 **Full-Stack Development:**\n• Building modern web applications\n• MERN stack projects\n• Real-time applications\n\n🏆 **Achievements:**\n• LeetCode Rating: 1850+\n• 500+ problems solved\n• Top 15% globally\n\nCheck out the Experience section on the portfolio for detailed information!";
        }

        // Projects-related
        if (lowerMessage.includes('project')) {
            return "Rocky has worked on impressive projects:\n\n🚗 **Smart Embedded Automotive System**\nAndroid Automotive IVI with custom HAL implementation\n\n🌍 **Wanderlust**\nMERN stack travel booking platform like Airbnb\n\n🤖 **Robotics Hand Gripper**\nArduino-based 3D printed robotic gripper\n\n🏠 **HomeHevan**\nReal estate platform with advanced filters\n\n🇮🇳 **Apna-Desh**\nCultural heritage website\n\nVisit the Projects section to see more details and GitHub links!";
        }

        // Education-related
        if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('college') || lowerMessage.includes('university') || lowerMessage.includes('study')) {
            return "Rocky's educational background:\n\n🎓 **B.Tech in Electrical & Electronics Engineering**\n• Institute of Engineering & Management, Kolkata\n• 2021 - 2025\n• CGPA: 8.5 - 8.54\n\n📚 **Intermediate**\n• Daudnagar College\n• 2018 - 2020\n• 70.4%\n\n📖 **Matriculation**\n• Haspura High School\n• Completed\n\nStrong foundation in engineering with focus on embedded systems and software development!";
        }

        // Contact-related
        if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('hire') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
            return "You can reach Rocky through:\n\n📧 **Email:**\npprl735757@gmail.com\n\n📞 **Phone:**\n+91 7357577247\n\n📍 **Location:**\nKolkata, India\n\n🔗 **Social Links:**\n• GitHub: github.com/Rpatel9675\n• LinkedIn: linkedin.com/in/rocky-patel-eee\n• Instagram: @r0k_i7\n\nOr visit the Contact page to send a message directly!";
        }

        // LeetCode/Competitive Programming
        if (lowerMessage.includes('leetcode') || lowerMessage.includes('coding') || lowerMessage.includes('competitive') || lowerMessage.includes('dsa') || lowerMessage.includes('algorithm')) {
            return "Rocky is a strong competitive programmer! 💪\n\n🏆 **LeetCode Stats:**\n• Rating: 1850\n• Problems Solved: 500+\n• Rank: Top 15%\n\n💡 **Expertise:**\n• Data Structures & Algorithms\n• Problem Solving\n• Code Optimization\n• System Design\n\nHe regularly practices on LeetCode to sharpen his problem-solving skills!";
        }

        // About Rocky
        if (lowerMessage.includes('about') || lowerMessage.includes('who') || lowerMessage.includes('tell me')) {
            return "**About Rocky Patel** 🚀\n\nRocky is a passionate developer from Kolkata, India who bridges the gap between hardware and software.\n\n🎯 **Specializations:**\n• Embedded Systems & Android Automotive IVI\n• Full-Stack Web Development\n• Hardware-Software Integration\n\n⚡ **What sets him apart:**\n• Strong foundation in Electrical & Electronics Engineering\n• Experience in both low-level embedded systems and high-level web apps\n• Problem-solving mindset with LeetCode expertise\n\nHe loves building efficient, scalable solutions and solving challenging technical problems!";
        }

        // Links
        if (lowerMessage.includes('github')) {
            return "Check out Rocky's GitHub profile:\n\n🔗 **github.com/Rpatel9675**\n\nYou'll find his projects, contributions, and code samples there!";
        }

        if (lowerMessage.includes('linkedin')) {
            return "Connect with Rocky on LinkedIn:\n\n💼 **linkedin.com/in/rocky-patel-eee**\n\nGreat for professional networking!";
        }

        // Portfolio sections
        if (lowerMessage.includes('portfolio') || lowerMessage.includes('website') || lowerMessage.includes('page')) {
            return "This portfolio showcases:\n\n🏠 **Home** - Introduction\n👤 **About** - Background & expertise\n⚙️ **Skills** - Technical abilities\n💼 **Experience** - Work history\n🚀 **Projects** - Featured work\n🏆 **Achievements** - Accomplishments\n🎓 **Education** - Academic background\n📬 **Contact** - Get in touch\n\nFeel free to explore each section!";
        }

        // Thank you
        if (lowerMessage.match(/(thank|thanks|appreciate)/)) {
            return "You're very welcome! 😊 Is there anything else you'd like to know about Rocky's skills, projects, or experience?";
        }

        // Default response
        return "I can help you with:\n\n• 💻 Rocky's technical skills & technologies\n• 👨‍💼 Work experience & projects\n• 🎓 Education background\n• 📧 Contact information\n• 🏆 LeetCode achievements\n• 🔗 Social media links\n\nJust ask me what you'd like to know! For example: \"What are Rocky's skills?\" or \"Tell me about his projects\"";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Show typing indicator
        setIsTyping(true);

        // Simulate typing delay for more natural feel
        setTimeout(() => {
            const response = getBotResponse(input);
            const botMessage = { text: response, sender: 'bot' };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 9998 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                            width: '400px',
                            height: '550px',
                            background: 'white',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            marginBottom: '1rem',
                            border: '1px solid rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                            color: 'white',
                            padding: '1.25rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Sparkles size={24} />
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Rocky's AI Assistant</h3>
                                    <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.9 }}>Always here to help!</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'white',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)'
                        }}>
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                    }}
                                >
                                    <div style={{
                                        maxWidth: '80%',
                                        padding: '0.875rem 1.125rem',
                                        borderRadius: msg.sender === 'user' ? '1.125rem 1.125rem 0.25rem 1.125rem' : '1.125rem 1.125rem 1.125rem 0.25rem',
                                        background: msg.sender === 'user'
                                            ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
                                            : 'white',
                                        color: msg.sender === 'user' ? 'white' : 'var(--text-main)',
                                        fontSize: '0.925rem',
                                        lineHeight: '1.6',
                                        whiteSpace: 'pre-wrap',
                                        boxShadow: msg.sender === 'bot' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                                        border: msg.sender === 'bot' ? '1px solid rgba(0,0,0,0.05)' : 'none'
                                    }}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                                >
                                    <div style={{
                                        padding: '0.875rem 1.125rem',
                                        borderRadius: '1.125rem 1.125rem 1.125rem 0.25rem',
                                        background: 'white',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}>
                                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                                            <motion.span
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                                                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#999' }}
                                            />
                                            <motion.span
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#999' }}
                                            />
                                            <motion.span
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                                                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#999' }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div style={{
                            padding: '1.25rem',
                            borderTop: '1px solid #e5e7eb',
                            display: 'flex',
                            gap: '0.75rem',
                            background: 'white'
                        }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                style={{
                                    flex: 1,
                                    padding: '0.875rem 1rem',
                                    border: '2px solid #e5e7eb',
                                    borderRadius: 'var(--radius-lg)',
                                    fontSize: '0.925rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                    fontFamily: 'inherit'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                style={{
                                    background: input.trim() ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : '#e5e7eb',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-lg)',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: input.trim() ? 'pointer' : 'not-allowed',
                                    transition: 'transform 0.2s, opacity 0.2s',
                                    opacity: input.trim() ? 1 : 0.5
                                }}
                                onMouseEnter={(e) => input.trim() && (e.target.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                    color: 'white',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'box-shadow 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.5)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.4)'}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOpen ? 'close' : 'open'}
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                    </motion.div>
                </AnimatePresence>

                {!isOpen && (
                    <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{
                            position: 'absolute',
                            top: '4px',
                            right: '4px',
                            width: '14px',
                            height: '14px',
                            background: '#10b981',
                            borderRadius: '50%',
                            border: '3px solid white',
                            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.6)'
                        }}
                    />
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
