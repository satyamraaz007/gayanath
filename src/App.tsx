import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import StickyLoginButton from './components/Layout/StickyLoginButton';
import AiChatWidget from './components/Chat/AiChatWidget';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Other routes will be added in next iterations */}
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><p className="text-xl text-gray-600">Page coming soon...</p></div>} />
          </Routes>
        </main>
        <Footer />
        <StickyLoginButton />
        <AiChatWidget />
      </div>
    </Router>
  );
}

export default App;