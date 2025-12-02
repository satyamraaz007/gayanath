import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Video, 
  BarChart3, 
  Heart, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Play,
  Star,
  Award
} from 'lucide-react';
import CanvasScroller from '../components/Home/CanvasScroller';
import CowShed from '../../public/cow_shed.jpg';

const Home: React.FC = () => {
  const facilityImages = [
    'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg',
    // 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    // 'https://images.pexels.com/photos/1459503/pexels-photo-1459503.jpeg',
    // 'https://images.pexels.com/photos/2255442/pexels-photo-2255442.jpeg',
    // 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
  ];

  const features = [
    {
      icon: Video,
      title: "24/7 Live Monitoring",
      description: "Real-time CCTV access to your cow with health and activity tracking"
    },
    {
      icon: BarChart3,
      title: "Transparent Analytics",
      description: "Daily milk yield, revenue calculations, and performance metrics"
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Regulated platform with insurance coverage and risk mitigation"
    },
    {
      icon: Heart,
      title: "Animal Welfare",
      description: "Premium care with veterinary support and optimal living conditions"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & KYC",
      description: "Create your account and complete quick verification"
    },
    {
      number: "02",
      title: "Choose Your Breed",
      description: "Browse our premium cow breeds and select your investment"
    },
    {
      number: "03",
      title: "Make Investment",
      description: "Secure payment of ₹1,00,000 per cow slot"
    },
    {
      number: "04",
      title: "Get Slot Assignment",
      description: "Receive your unique SlotID within 7 days"
    },
    {
      number: "05",
      title: "Track & Monitor",
      description: "Access live feeds, health data, and milk production"
    },
    {
      number: "06",
      title: "Earn Returns",
      description: "Receive 50% of net profits directly to your wallet"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bihar",
      text: "Amazing platform! I can see my cow Bella every day and track her health. The returns are consistent and transparent.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Bihar",
      text: "Best investment decision I made. The technology and care provided is outstanding. Highly recommended!",
      rating: 5
    },
    {
      name: "Ram Shewak",
      location: "Bihar",
      text: "Love the transparency and real-time monitoring. My cow is healthy and productive. Great ROI!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Smart Dairy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Investment</span>
              <br />Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in technology-enabled dairy farming with complete transparency. 
              Monitor your cows live, track milk production, and earn consistent returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/breeds"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Investing</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/process"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Take a Tour</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secondary Navigation */}
      {/* <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-8">
            {['About', 'Services', 'Process', 'Breeds', 'Investors', 'Impact', 'FAQs', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Canvas Scroll Section */}
      <CanvasScroller images={facilityImages} />

      {/* Why GAYANATH Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GAYANATH?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing dairy farming with cutting-edge technology, 
              complete transparency, and sustainable practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start your dairy investment journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Transparency</h2>
              <p className="text-xl text-gray-600 mb-8">
                See your investment in action with 24/7 live feeds, real-time data, 
                and comprehensive analytics dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  'Live CCTV access to your cow',
                  'Real-time health monitoring',
                  'Daily milk yield tracking',
                  'Revenue calculations & payouts',
                  'Veterinary care logs'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={CowShed}
                alt="Dashboard preview" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Returns & Revenue */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Attractive Returns</h2>
            <p className="text-xl text-gray-600">Earn consistent income from your dairy investment</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">40-50%</h3>
              <p className="text-gray-600">Annual Returns</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50%</h3>
              <p className="text-gray-600">Net Profit Share</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹1L</h3>
              <p className="text-gray-600">Minimum Investment</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Investors Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied investors</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-green-100 mb-8">
              Join the future of dairy farming with transparent, technology-enabled investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/breeds"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Invest Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/process"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Take a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;