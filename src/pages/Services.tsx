import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Video,
  Activity,
  Heart,
  Utensils,
  Wallet,
  BarChart3,
  Recycle,
  Building,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import SmartHousingService from "../../public/smartHousingService.jpg";
import DashboardService from "../../public/dashboard_service.png";
import FeedingService from "../../public/feeding_service.avif";
import FranchiseService from "../../public/franchise_service.jpeg";
import ManureService from "../../public/manure_service.jpeg";
import MilkingService from "../../public/milking_service.webp";
import PayoutService from "../../public/payout_service1.jpg";
import CctvService from "../../public/cctv_service.jpg";
import CalfService from "../../public/calf_service.webp";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Home,
      title: "Smart Housing & Hygiene Management",
      shortDesc:
        "Climate-controlled, IoT-enabled cow housing with automated cleaning systems",
      longDesc:
        "Our state-of-the-art facility features climate-controlled environments with optimal temperature (18-24°C) and humidity (60-70%) levels. Automated cleaning systems ensure pristine hygiene standards, while IoT sensors monitor air quality, ammonia levels, and ventilation in real-time.",
      features: [
        "Climate control systems",
        "Automated cleaning",
        "Air quality monitoring",
        "Biosecurity protocols",
      ],
      cta: "Learn More",
      img: SmartHousingService,
    },
    {
      id: 2,
      icon: Video,
      title: "24/7 CCTV & Health Monitoring",
      shortDesc:
        "Real-time surveillance and health tracking with AI-powered analytics",
      longDesc:
        "Every cow slot is equipped with high-definition cameras providing 24/7 live streaming to investors. AI-powered analytics monitor behavior patterns, detect health anomalies, and alert our veterinary team for immediate intervention.",
      features: [
        "HD live streaming",
        "AI behavior analysis",
        "Health anomaly detection",
        "Mobile app access",
      ],
      cta: "View Demo",
      img: CctvService,
    },
    {
      id: 3,
      icon: Activity,
      title: "Automated Milking & Yield Tracking",
      shortDesc:
        "Robotic milking systems with precise yield measurement and quality analysis",
      longDesc:
        "Our robotic milking parlors operate 24/7, allowing cows to be milked on their natural schedule. Each session is precisely measured for volume, fat content, protein levels, and somatic cell count, ensuring optimal milk quality.",
      features: [
        "Robotic milking systems",
        "Quality analysis",
        "Yield optimization",
        "Automated scheduling",
      ],
      cta: "See Technology",
      img: MilkingService,
    },
    {
      id: 4,
      icon: Heart,
      title: "Breeding & Calf Management",
      shortDesc:
        "Professional breeding programs and comprehensive calf care services",
      longDesc:
        "Our breeding program uses artificial insemination with premium genetic material to ensure healthy offspring. Comprehensive calf management includes colostrum feeding, vaccination schedules, and growth monitoring.",
      features: [
        "AI breeding programs",
        "Genetic selection",
        "Calf nutrition plans",
        "Health monitoring",
      ],
      cta: "Breeding Info",
      img: CalfService,
    },
    {
      id: 5,
      icon: Utensils,
      title: "Feed & Veterinary Care",
      shortDesc:
        "Nutritionally balanced feed programs and on-site veterinary services",
      longDesc:
        "Each cow receives a customized nutrition plan based on lactation stage, body condition, and milk yield targets. Our on-site veterinary team provides preventive care, regular health checkups, and emergency medical services.",
      features: [
        "Custom nutrition plans",
        "On-site veterinarians",
        "Preventive healthcare",
        "Emergency services",
      ],
      cta: "Care Details",
      img: FeedingService,
    },
    {
      id: 6,
      icon: Wallet,
      title: "Revenue Calculation & Payouts",
      shortDesc:
        "Transparent revenue sharing with automated wallet and withdrawal systems",
      longDesc:
        "Investors receive 50% of net profits from milk sales. Our transparent calculation system deducts operational costs and distributes earnings directly to investor wallets with detailed breakdowns and instant withdrawal options.",
      features: [
        "50% profit sharing",
        "Transparent calculations",
        "Instant withdrawals",
        "Detailed reports",
      ],
      cta: "Revenue Model",
      img: PayoutService,
    },
    {
      id: 7,
      icon: BarChart3,
      title: "Investor Dashboard & Analytics",
      shortDesc:
        "Comprehensive analytics platform with real-time data and insights",
      longDesc:
        "Our investor dashboard provides real-time access to cow health metrics, milk production data, revenue calculations, and market insights. Advanced analytics help investors track performance and make informed decisions.",
      features: [
        "Real-time dashboards",
        "Performance analytics",
        "Market insights",
        "Mobile accessibility",
      ],
      cta: "View Dashboard",
      img: DashboardService,
    },
    {
      id: 8,
      icon: Recycle,
      title: "Manure Monetization & By-products",
      shortDesc: "Sustainable waste management with additional revenue streams",
      longDesc:
        "We convert cow manure into organic fertilizer and biogas, creating additional revenue streams for investors. Our circular economy approach ensures zero waste while generating supplementary income.",
      features: [
        "Organic fertilizer production",
        "Biogas generation",
        "Additional revenue",
        "Sustainable practices",
      ],
      cta: "Sustainability",
      img: ManureService,
    },
    {
      id: 9,
      icon: Building,
      title: "Franchising & White-label Solutions",
      shortDesc:
        "Expansion opportunities through franchising and technology licensing",
      longDesc:
        "We offer franchising opportunities for entrepreneurs and white-label technology solutions for existing dairy farms. Our proven model and technology stack can be replicated across different locations.",
      features: [
        "Franchise opportunities",
        "Technology licensing",
        "Training programs",
        "Ongoing support",
      ],
      cta: "Partnership Info",
      img: FranchiseService,
    },
  ];

  const stats = [
    { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Clock, value: "24/7", label: "Monitoring" },
    { icon: Users, value: "500+", label: "Happy Investors" },
    { icon: Heart, value: "1000+", label: "Healthy Cows" },
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
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive smart dairy solutions powered by cutting-edge
              technology, ensuring optimal care for your investment and maximum
              returns.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-green-600 font-semibold">
                      Service {service.id}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.longDesc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <span>{service.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                  </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of investors who trust GAYANATH for their dairy
              investment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Investing
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Schedule a Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
