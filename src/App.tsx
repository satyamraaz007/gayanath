import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import StickyLoginButton from './components/Layout/StickyLoginButton';
import AiChatWidget from './components/Chat/AiChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Breeds, { BreedDetail } from './pages/Breeds';
import Investors from './pages/Investors';
import Impact from './pages/Impact';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import { useStore } from './store/useStore';

function App() {
  const { isLoggedIn } = useStore();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {!isLoggedIn && <Header />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breeds/:id" element={<BreedDetail />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        {!isLoggedIn && (
          <>
            <Footer />
            <StickyLoginButton />
            <AiChatWidget />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;