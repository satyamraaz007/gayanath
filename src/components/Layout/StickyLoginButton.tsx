import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, X, User } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';

const StickyLoginButton: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { isLoggedIn, currentUser, login, logout } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      setIsLoginOpen(false);
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use demo@gayanath.com / Demo@123');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoggedIn && currentUser) {
    return (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white rounded-full shadow-lg border border-gray-200 px-6 py-3 flex items-center space-x-3">
          <User className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Welcome, {currentUser.name}</span>
          <button
            onClick={handleLogout}
            className="text-xs text-gray-500 hover:text-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 font-medium"
        >
          <LogIn className="h-5 w-5" />
          <span>Log in / Sign up</span>
        </button>
      </div>

      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Login</h2>
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="demo@gayanath.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Demo@123"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Login
                </button>
              </form>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Demo Account:</strong><br />
                  Email: demo@gayanath.com<br />
                  Password: Demo@123
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyLoginButton;