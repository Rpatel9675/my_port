import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyButton from './components/EmergencyButton';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portal from './pages/Portal';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} /> {/* Reuse Home for About for now */}
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </main>
        <EmergencyButton />
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
