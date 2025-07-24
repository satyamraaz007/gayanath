import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Search, 
  CreditCard, 
  MapPin, 
  Video, 
  Wallet,
  ArrowRight,
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

const Process: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: 'Sign Up & KYC Verification',
      shortDesc: 'Create your account and complete quick verification',
      longDesc: 'Start your journey by creating a secure account with GAYANATH. Our streamlined KYC process takes just 5 minutes and includes identity verification, address proof, and bank account linking. All documents are processed securely with bank-grade encryption.',
      duration: '5 minutes',
      requirements: ['Valid ID proof', 'Address verification', 'Bank account details', 'Mobile number'],
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 2,
      icon: Search,
      title: 'Browse & Choose Your Breed',
      shortDesc: 'Explore premium cow breeds and select your investment',
      longDesc: 'Browse our curated selection of high-yield dairy breeds including Holstein Friesian, Gir, and Jersey cows. Each breed profile includes detailed information about milk yield, care requirements, and expected returns. Use our smart filters to find the perfect match for your investment goals.',
      duration: '15 minutes',
      requirements: ['Investment budget', 'Yield preferences', 'Risk tolerance', 'Return expectations'],
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Secure Payment',
      shortDesc: 'Complete your investment with secure payment processing',
      longDesc: 'Make your investment of ₹1,00,000 per cow slot through our secure payment gateway. We accept multiple payment methods including UPI, net banking, and credit/debit cards. All transactions are protected with 256-bit SSL encryption and instant confirmation.',
      duration: '2 minutes',
      requirements: ['Payment method', 'Investment amount', 'GST details (if applicable)', 'Agreement acceptance'],
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 4,
      icon: MapPin,
      title: 'Slot Assignment',
      shortDesc: 'Receive your unique SlotID within 7 days',
      longDesc: 'Once payment is confirmed, our team assigns you a specific cow and slot within our facility. You\'ll receive your unique SlotID, cow details, and access credentials via email and SMS. This process typically takes 3-7 business days.',
      duration: '3-7 days',
      requirements: ['Payment confirmation', 'Cow availability', 'Health clearance', 'Facility preparation'],
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 5,
      icon: Video,
      title: 'Live Monitoring Access',
      shortDesc: 'Access live feeds, health data, and milk production tracking',
      longDesc: 'Get 24/7 access to your cow through our investor dashboard. Watch live CCTV feeds, monitor health vitals, track daily milk production, and receive real-time alerts. Our mobile app ensures you stay connected to your investment anywhere, anytime.',
      duration: 'Ongoing',
      requirements: ['Dashboard login', 'Mobile app download', 'Notification preferences', 'Contact details'],
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 6,
      icon: Wallet,
      title: 'Earn & Withdraw Returns',
      shortDesc: 'Receive 50% of net profits directly in your wallet',
      longDesc: 'Start earning from day one! Receive 50% of net profits from milk sales directly in your GAYANATH wallet. Track daily earnings, view detailed revenue breakdowns, and withdraw funds instantly to your bank account. Minimum withdrawal is ₹500.',
      duration: 'Daily payouts',
      requirements: ['Active cow', 'Milk production', 'Market sales', 'Profit calculation'],
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Secure & Regulated', desc: 'SEBI-compliant platform with investor protection' },
    { icon: Clock, title: 'Quick Setup', desc: 'Complete onboarding in under 30 minutes' },
    { icon: CheckCircle, title: 'Guaranteed Returns', desc: 'Transparent profit-sharing model' }
  ];

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
              Take a <span className="text-blue-600">Virtual Tour</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how easy it is to start your smart dairy investment journey. 
              Follow our simple 6-step process and begin earning returns in just days.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Play className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-medium">Interactive walkthrough</span>
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      index === currentStep
                        ? 'bg-blue-600 text-white'
                        : index < currentStep
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index < currentStep ? <CheckCircle className="h-5 w-5" /> : step.id}
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-1 mx-2 ${
                      index < currentStep ? 'bg-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {React.createElement(steps[currentStep].icon, { className: "h-6 w-6 text-blue-600" })}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-semibold">Step {steps[currentStep].id}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{steps[currentStep].duration}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{steps[currentStep].title}</h2>
              <p className="text-lg text-gray-600 mb-8">{steps[currentStep].longDesc}</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h3>
                <ul className="space-y-2">
                  {steps[currentStep].requirements.map((req) => (
                    <li key={req} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Video/Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <video
                  className="w-full h-80 object-cover"
                  poster={`https://images.pexels.com/photos/${1100000 + currentStep}/pexels-photo-${1100000 + currentStep}.jpeg?w=600&h=400`}
                  controls
                >
                  <source src={steps[currentStep].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                Step {currentStep + 1} Demo
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Jump to Any Step</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl text-left transition-all ${
                  index === currentStep
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {React.createElement(step.icon, { 
                    className: `h-6 w-6 ${index === currentStep ? 'text-white' : 'text-blue-600'}` 
                  })}
                  <span className="font-semibold">Step {step.id}</span>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className={`text-sm ${index === currentStep ? 'text-blue-100' : 'text-gray-600'}`}>
                  {step.shortDesc}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors who have already started earning with GAYANATH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Step 1</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Browse Breeds
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;