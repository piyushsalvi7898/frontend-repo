
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; // Import the Contact component
import Services from './pages/Services'; // Import the Services component
import DashboardPage from './pages/DashboardPage';
import OurClients from './pages/OurClients';
import './css/App.css';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} /> {/* Use Contact component */}
                    <Route path="/services" element={<Services />} /> {/* Use Services component */}
                    <Route path='/dashboard' element={<DashboardPage isOwner={true} />} />
                    <Route path='/our-clients'element={<OurClients />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;