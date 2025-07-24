import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Calculator, 
  PieChart, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Users,
  Award,
  Target
} from 'lucide-react';

const Investors: React.FC = () => {
  const profitModel = [
    { item: 'Milk Sales Revenue', amount: 2500, type: 'income' },
    { item: 'Feed Costs', amount: -800, type: 'expense' },
    { item: 'Veterinary Care', amount: -200, type: 'expense' },
    { item: 'Facility Maintenance', amount: -300, type: 'expense' },
    { item: 'Staff Costs', amount: -400, type: 'expense' },
    { item: 'Insurance & Misc', amount: -100, type: 'expense' },
    { item: 'Net Profit', amount: 700, type: 'profit' },
    { item: 'Your Share (50%)', amount: 350, type: 'investor' }
  ];

  const riskFactors = [
    {
      risk: 'Market Price Volatility',
      mitigation: 'Long-term contracts with dairy processors and diversified buyer network',
      level: 'Medium'
    },
    {
      risk: 'Animal Health Issues',
      mitigation: '24/7 veterinary care, insurance coverage, and preventive health programs',
      level: 'Low'
    },
    {
      risk: 'Feed Cost Fluctuations',
      mitigation: 'Bulk purchasing agreements and on-site feed production capabilities',
      level: 'Medium'
    },
    {
      risk: 'Regulatory Changes',
      mitigation: 'Compliance team monitoring regulations and proactive adaptation',
      level: 'Low'
    }
  ];

  const investorBenefits = [
    {
      icon: TrendingUp,
      title: 'Attractive Returns',
      description: '12-18% annual returns with daily profit sharing',
      highlight: '15% avg return'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Comprehensive insurance and diversified revenue streams',
      highlight: 'Fully insured'
    },
    {
      icon: PieChart,
      title: 'Portfolio Diversification',
      description: 'Add agricultural assets to your investment portfolio',
      highlight: 'Alt investment'
    },
    {
      icon: Users,
      title: 'Social Impact',
      description: 'Support rural employment and sustainable farming',
      highlight: 'ESG aligned'
    }
  ];

  const faqs = [
    {
      question: 'How are profits calculated and distributed?',
      answer: 'Profits are calculated daily based on milk sales revenue minus operational costs. You receive 50% of net profits directly in your GAYANATH wallet, with detailed breakdowns available in your dashboard.'
    },
    {
      question: 'What happens if my cow gets sick?',
      answer: 'All cows are covered by comprehensive health insurance. Our on-site veterinary team provides immediate care, and any medical expenses are covered. In case of serious illness, insurance compensation is provided.'
    },
    {
      question: 'Can I visit my cow?',
      answer: 'Yes! We encourage investor visits. You can schedule facility tours and meet your cow in person. We also provide 24/7 live CCTV access through your dashboard.'
    },
    {
      question: 'How do I withdraw my earnings?',
      answer: 'Earnings can be withdrawn instantly to your linked bank account with a minimum withdrawal of ₹500. There are no withdrawal fees for amounts above ₹1000.'
    },
    {
      question: 'What is the investment tenure?',
      answer: 'The typical investment period is 5-7 years, corresponding to a cow\'s productive lifespan. You can exit earlier through our secondary market or cow buyback program.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              For <span className="text-purple-600">Investors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how GAYANATH's transparent profit-sharing model creates 
              sustainable returns while supporting rural communities and animal welfare.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: '15%', label: 'Average Annual Return' },
              { icon: Users, value: '500+', label: 'Active Investors' },
              { icon: DollarSign, value: '₹2.5Cr', label: 'Total Invested' },
              { icon: Award, value: '94%', label: 'Satisfaction Rate' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profit Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Profit Model</h2>
            <p className="text-xl text-gray-600">See exactly how your returns are calculated</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Calculation Table */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Monthly Profit Calculation (Per Cow)</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {profitModel.map((item, index) => (
                    <div key={item.item} className="flex justify-between items-center py-2">
                      <span className={`${
                        item.type === 'profit' ? 'font-semibold text-green-600' :
                        item.type === 'investor' ? 'font-bold text-purple-600' :
                        'text-gray-700'
                      }`}>
                        {item.item}
                      </span>
                      <span className={`font-semibold ${
                        item.type === 'income' ? 'text-green-600' :
                        item.type === 'expense' ? 'text-red-600' :
                        item.type === 'profit' ? 'text-green-600' :
                        'text-purple-600'
                      }`}>
                        {item.amount > 0 ? '+' : ''}₹{Math.abs(item.amount)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-purple-600 mb-1">Your Monthly Earnings</p>
                      <p className="text-2xl font-bold text-purple-600">₹350</p>
                      <p className="text-xs text-gray-600">Annual: ₹4,200 (15% return on ₹1L investment)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Invest with GAYANATH?</h3>
              {investorBenefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Risk Factors & Mitigation</h2>
            <p className="text-xl text-gray-600">We're transparent about risks and how we manage them</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskFactors.map((factor, index) => (
              <motion.div
                key={factor.risk}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className={`h-6 w-6 mt-1 ${
                    factor.level === 'High' ? 'text-red-500' :
                    factor.level === 'Medium' ? 'text-yellow-500' :
                    'text-green-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{factor.risk}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        factor.level === 'High' ? 'bg-red-100 text-red-600' :
                        factor.level === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {factor.level} Risk
                      </span>
                    </div>
                    <p className="text-gray-600">{factor.mitigation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Process</h2>
            <p className="text-xl text-gray-600">Simple steps to start earning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Sign Up & KYC', desc: 'Complete registration and verification', time: '5 mins' },
              { step: 2, title: 'Choose & Invest', desc: 'Select breed and make payment', time: '10 mins' },
              { step: 3, title: 'Start Earning', desc: 'Get slot assignment and begin tracking', time: '7 days' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.desc}</p>
                <span className="text-sm text-purple-600 font-medium">{step.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investor FAQ</h2>
            <p className="text-xl text-gray-600">Common questions from our investors</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Investing?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our community of smart investors earning consistent returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Investing
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;