import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  CreditCard, 
  Shield, 
  Heart, 
  Smartphone,
  Users
} from 'lucide-react';

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'account', name: 'Account & Registration', icon: Users },
    { id: 'investment', name: 'Investment & Payments', icon: CreditCard },
    { id: 'monitoring', name: 'Monitoring & Technology', icon: Smartphone },
    { id: 'animal-care', name: 'Animal Care', icon: Heart },
    { id: 'returns', name: 'Returns & Withdrawals', icon: Shield }
  ];

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account on GAYANATH?',
      answer: 'Creating an account is simple! Click on the "Sign Up" button, provide your basic details, complete the KYC verification by uploading your ID and address proof, and verify your mobile number and email. The entire process takes about 5-10 minutes.'
    },
    {
      id: 2,
      category: 'account',
      question: 'What documents are required for KYC verification?',
      answer: 'You need a valid government-issued photo ID (Aadhaar, PAN, Passport, or Driving License), address proof (utility bill, bank statement, or rental agreement), and a recent photograph. All documents should be clear and valid.'
    },
    {
      id: 3,
      category: 'investment',
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment is ₹1,00,000 per cow slot. This covers the cost of cow acquisition, initial setup, and first year\'s operational expenses. You can invest in multiple cows to diversify your portfolio.'
    },
    {
      id: 4,
      category: 'investment',
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, net banking, credit/debit cards, and bank transfers. All payments are processed through secure, encrypted gateways. You\'ll receive instant confirmation once payment is successful.'
    },
    {
      id: 5,
      category: 'investment',
      question: 'Is there any lock-in period for investments?',
      answer: 'There\'s no mandatory lock-in period, but we recommend a minimum investment horizon of 3-5 years for optimal returns. You can exit through our secondary market or cow buyback program with 30 days notice.'
    },
    {
      id: 6,
      category: 'monitoring',
      question: 'How can I monitor my cow?',
      answer: 'You get 24/7 access to live CCTV feeds through our web dashboard and mobile app. You can watch your cow, track health metrics, monitor milk production, and receive real-time alerts about any important events.'
    },
    {
      id: 7,
      category: 'monitoring',
      question: 'Can I visit my cow in person?',
      answer: 'Absolutely! We encourage investor visits. You can schedule facility tours through your dashboard or by contacting our support team. Visits are allowed during business hours with prior appointment for biosecurity reasons.'
    },
    {
      id: 8,
      category: 'animal-care',
      question: 'What happens if my cow gets sick?',
      answer: 'All cows are covered by comprehensive health insurance. Our on-site veterinary team provides immediate care, and serious cases are handled by specialist veterinarians. Medical expenses are covered, and you\'re kept informed throughout the treatment.'
    },
    {
      id: 9,
      category: 'animal-care',
      question: 'How do you ensure animal welfare?',
      answer: 'We maintain the highest animal welfare standards with climate-controlled housing, premium nutrition, regular health checkups, comfortable resting areas, and stress-free environments. Our facilities are regularly audited by animal welfare experts.'
    },
    {
      id: 10,
      category: 'returns',
      question: 'How are returns calculated and paid?',
      answer: 'You receive 50% of net profits from milk sales. Returns are calculated daily based on milk yield, market prices, and operational costs. Profits are credited to your GAYANATH wallet and can be withdrawn instantly to your bank account.'
    },
    {
      id: 11,
      category: 'returns',
      question: 'What is the expected return on investment?',
      answer: 'Historical returns have ranged from 40-50% annually, with an average of 15%. Returns depend on milk yield, market prices, and operational efficiency. We provide transparent reporting so you can track performance in real-time.'
    },
    {
      id: 12,
      category: 'returns',
      question: 'How do I withdraw my earnings?',
      answer: 'Withdrawals can be made instantly through your dashboard. Minimum withdrawal is ₹500, and there are no fees for withdrawals above ₹1,000. Funds are transferred to your linked bank account within 24 hours.'
    },
    {
      id: 13,
      category: 'monitoring',
      question: 'Is there a mobile app available?',
      answer: 'Yes! Our mobile app is available for both iOS and Android. You can monitor your cows, track earnings, receive notifications, and manage your account on the go. Download links are available in your dashboard.'
    },
    {
      id: 14,
      category: 'investment',
      question: 'Can I invest in multiple cows?',
      answer: 'Yes, you can invest in multiple cows to diversify your portfolio. Many investors start with one cow and gradually add more. Each cow is tracked separately in your dashboard with individual performance metrics.'
    },
    {
      id: 15,
      category: 'animal-care',
      question: 'What happens when a cow reaches the end of its productive life?',
      answer: 'When a cow\'s milk production declines significantly, we have ethical retirement programs. The cow is either moved to a sanctuary or sold to farmers for breeding purposes. Investors receive a proportional share of any sale proceeds.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about GAYANATH's smart dairy investment platform. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            {filteredFAQs.length} questions found
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse different categories</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Show All Questions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                Schedule a Call
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                <p className="text-gray-600 text-sm">Available 24/7</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                <p className="text-gray-600 text-sm">Mon-Fri, 9 AM - 6 PM</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Community Forum</h3>
                <p className="text-gray-600 text-sm">Connect with other investors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;