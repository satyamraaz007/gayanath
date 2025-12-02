import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Calendar, 
  Award, 
  Users, 
  Newspaper,
  ArrowRight 
} from 'lucide-react';
import VictorMan from '../../public/victor_man.png';
import Atish from '../../public/atish.jpg';
import Niharika from '../../public/niharika.jpg';
import Mantasha from '../../public/mantsha.jpg';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Idea Phase',
      description: 'Conceptualized smart dairy investment platform to bridge urban investors and rural dairy farming'
    },
    {
      year: 'Jan 2025',
      title: 'Concept Validation',
      description: 'Conducted primary research with farmers and potential investors, validated market demand'
    },
    {
      year: 'Mar 2025',
      title: 'Prototype Development',
      description: 'Designed facility architecture and developed MVP of monitoring app and investor dashboard'
    },
    {
      year: 'Jun 2025',
      title: 'Pilot Construction',
      description: 'Started construction of first smart dairy facility with 100 IoT-enabled cow slots'
    },
    {
      year: 'Sep 2025',
      title: 'Technology Integration',
      description: 'Deployed CCTV systems, IoT sensors, and automated milking equipment'
    },
    {
      year: 'Dec 2025',
      title: 'Beta Launch',
      description: 'Launched beta program with 50 investors, achieved 94% satisfaction rate'
    },
    {
      year: '2026',
      title: 'Public Launch',
      description: 'Full platform launch with 500+ slots, expansion to multiple facilities planned'
    }
  ];

  const team = [
    {
      name: 'Atish Raaz',
      role: 'Founder & CEO',
      bio: '',
      image: Atish
    },
    {
      name: 'Satyam Raaz',
      role: 'Co-founder & CTO',
      bio: '',
      image: VictorMan
    },
    {
      name: 'Mantsha Khanam',
      role: 'Head of Operations',
      bio: '',
      image: Mantasha
    },
    {
      name: 'Niharika Maurya',
      role: 'Chief Financial Officer',
      bio: '',
      image: Niharika
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Animal Welfare First',
      description: 'We prioritize the health and well-being of our cows with premium care and comfortable living conditions.'
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'Every aspect of our operations is transparent to investors through real-time monitoring and reporting.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in facility management, animal care, and milk production.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'We create sustainable livelihoods for rural communities while providing returns to urban investors.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">GAYANATH</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing dairy farming by connecting urban investors with 
              technology-enabled rural dairy operations, creating sustainable value for all stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To democratize dairy farming investments through technology, transparency, 
                and sustainable practices, creating prosperity for farmers and investors alike.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become India's leading smart dairy investment platform, setting new standards 
                for transparency, animal welfare, and sustainable agriculture practices.
              </p>
            </motion.div>

            {/* Values Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600">
                Transparency, animal welfare, sustainability, and community empowerment 
                guide every decision we make and every innovation we pursue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - Detailed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that drive everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <value.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey - Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From idea to India's leading smart dairy platform</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-green-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                } md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm ml-12 md:ml-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-semibold">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate experts driving innovation in dairy farming</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h2>
            <p className="text-xl text-gray-600">Recognition and coverage from leading publications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Featured in Economic Times',
                date: 'December 2025',
                description: 'GAYANATH revolutionizes dairy investment with transparent platform'
              },
              {
                title: 'YourStory Interview',
                date: 'November 2025',
                description: 'How technology is transforming traditional dairy farming'
              },
              {
                title: 'Inc42 Startup Story',
                date: 'October 2025',
                description: 'Smart dairy platform connects urban investors with rural farms'
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <Newspaper className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-green-600 text-sm font-medium mb-2">{article.date}</p>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a href="#" className="text-green-600 font-medium flex items-center space-x-1 hover:text-green-700">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Commitment */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ESG Commitment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              We're committed to Environmental, Social, and Governance practices that create 
              sustainable value for all stakeholders while contributing to the UN Sustainable Development Goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  E
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental</h3>
                <p className="text-gray-600">Sustainable farming practices, waste management, and carbon footprint reduction</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  S
                </div>
                <h3 className="text-xl font-semibold mb-2">Social</h3>
                <p className="text-gray-600">Rural employment, farmer empowerment, and community development initiatives</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  G
                </div>
                <h3 className="text-xl font-semibold mb-2">Governance</h3>
                <p className="text-gray-600">Transparent operations, ethical practices, and stakeholder accountability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;