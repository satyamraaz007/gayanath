import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Leaf, 
  Target, 
  TrendingUp, 
  Award,
  Globe,
  Recycle,
  Droplets,
  Zap,
  TreePine,
  Building
} from 'lucide-react';

const Impact: React.FC = () => {
  const impactMetrics = [
    { icon: Heart, value: '1,000+', label: 'Cows Under Care', color: 'text-red-500' },
    { icon: Users, value: '150+', label: 'Rural Jobs Created', color: 'text-blue-500' },
    { icon: Leaf, value: '2,500T', label: 'CO₂ Reduced Annually', color: 'text-green-500' },
    { icon: Droplets, value: '50M L', label: 'Quality Milk Produced', color: 'text-cyan-500' }
  ];

  const animalWelfare = [
    {
      title: 'Premium Living Conditions',
      description: 'Climate-controlled barns with optimal temperature and humidity',
      metrics: ['18-24°C temperature', '60-70% humidity', '24/7 monitoring']
    },
    {
      title: 'Nutritional Excellence',
      description: 'Customized feed plans with premium quality ingredients',
      metrics: ['Balanced nutrition', 'Fresh water access', 'Supplement programs']
    },
    {
      title: 'Healthcare Standards',
      description: 'On-site veterinary care with preventive health programs',
      metrics: ['Daily health checks', 'Vaccination schedules', 'Emergency care']
    },
    {
      title: 'Stress-Free Environment',
      description: 'Natural behavior encouragement with comfortable resting areas',
      metrics: ['Open grazing areas', 'Social interaction', 'Comfortable bedding']
    }
  ];

  const ruralImpact = [
    {
      icon: Users,
      title: 'Employment Generation',
      description: 'Creating sustainable jobs in rural communities',
      stats: ['150+ direct jobs', '300+ indirect jobs', '₹2Cr+ annual wages']
    },
    {
      icon: Building,
      title: 'Infrastructure Development',
      description: 'Building modern facilities in rural areas',
      stats: ['5 facilities built', '₹50Cr+ investment', 'Local contractor preference']
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Boosting local economy through various channels',
      stats: ['₹10Cr+ local spending', '50+ vendor partnerships', 'Tax revenue generation']
    },
    {
      icon: Award,
      title: 'Skill Development',
      description: 'Training programs for local workforce',
      stats: ['200+ trained workers', '15 skill programs', '95% retention rate']
    }
  ];

  const sustainability = [
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Converting waste into valuable resources',
      impact: '100% waste utilization through biogas and organic fertilizer production'
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Solar power and biogas for facility operations',
      impact: '60% renewable energy usage, reducing carbon footprint by 40%'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Efficient water usage and recycling systems',
      impact: '30% water savings through recycling and efficient systems'
    },
    {
      icon: TreePine,
      title: 'Carbon Sequestration',
      description: 'Tree plantation and carbon offset programs',
      impact: '10,000+ trees planted, 500T CO₂ offset annually'
    }
  ];

  const sdgGoals = [
    { goal: 1, title: 'No Poverty', description: 'Creating rural employment opportunities' },
    { goal: 2, title: 'Zero Hunger', description: 'Producing nutritious milk for communities' },
    { goal: 3, title: 'Good Health', description: 'Ensuring animal welfare and food safety' },
    { goal: 8, title: 'Decent Work', description: 'Providing fair wages and safe working conditions' },
    { goal: 12, title: 'Responsible Consumption', description: 'Sustainable production practices' },
    { goal: 13, title: 'Climate Action', description: 'Reducing carbon footprint and emissions' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Impact</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating positive change for animals, communities, and the environment 
              through sustainable dairy farming practices.
            </p>
          </motion.div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animal Welfare */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Animal Welfare Excellence</h2>
            <p className="text-xl text-gray-600">Our commitment to the highest standards of animal care</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {animalWelfare.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.metrics.map((metric) => (
                    <div key={metric} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rural Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rural Community Impact</h2>
            <p className="text-xl text-gray-600">Empowering rural communities through sustainable development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ruralImpact.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-1">
                  {item.stats.map((stat) => (
                    <div key={stat} className="text-sm text-blue-600 font-medium">{stat}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Sustainability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Environmental Sustainability</h2>
            <p className="text-xl text-gray-600">Leading the way in sustainable dairy farming practices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainability.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-gray-700 font-medium">{item.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UN SDG Alignment</h2>
            <p className="text-xl text-gray-600">Contributing to the United Nations Sustainable Development Goals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgGoals.map((sdg, index) => (
              <motion.div
                key={sdg.goal}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {sdg.goal}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{sdg.title}</h3>
                </div>
                <p className="text-gray-600">{sdg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
            <p className="text-xl text-gray-600">Real stories from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ramesh Kumar',
                role: 'Farm Manager',
                story: 'Working at GAYANATH has transformed my life. I now have a stable income and have learned modern farming techniques that I share with my community.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              },
              {
                name: 'Sunita Devi',
                role: 'Veterinary Assistant',
                story: 'The training programs here helped me develop new skills. I\'m proud to contribute to animal welfare while supporting my family.',
                image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg'
              },
              {
                name: 'Local Community',
                role: 'Village Development',
                story: 'GAYANATH\'s presence has brought infrastructure development to our village. We now have better roads, electricity, and job opportunities.',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">{story.name}</h3>
                <p className="text-green-600 text-sm text-center mb-4">{story.role}</p>
                <p className="text-gray-600 text-center italic">"{story.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Impact Journey</h2>
            <p className="text-xl text-green-100 mb-8">
              Be part of a movement that creates positive change for animals, communities, and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Investing
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;