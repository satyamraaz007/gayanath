import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Thermometer, 
  Droplets, 
  Calendar, 
  Baby, 
  ArrowRight,
  Star,
  Heart,
  ShoppingCart
} from 'lucide-react';
import { breeds, cows } from '../data/mockData';
import { Breed } from '../types';

const Breeds: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [yieldFilter, setYieldFilter] = useState('');

  const filteredBreeds = breeds.filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         breed.origin.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOrigin = !selectedOrigin || breed.origin === selectedOrigin;
    const matchesYield = !yieldFilter || 
                        (yieldFilter === 'high' && breed.yieldRange.average >= 25) ||
                        (yieldFilter === 'medium' && breed.yieldRange.average >= 20 && breed.yieldRange.average < 25) ||
                        (yieldFilter === 'low' && breed.yieldRange.average < 20);
    
    return matchesSearch && matchesOrigin && matchesYield;
  });

  const origins = [...new Set(breeds.map(breed => breed.origin))];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium <span className="text-orange-600">Cow Breeds</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully selected high-yield dairy breeds, each offering 
              unique characteristics and exceptional milk production capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search breeds or origins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Origin Filter */}
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">All Origins</option>
              {origins.map(origin => (
                <option key={origin} value={origin}>{origin}</option>
              ))}
            </select>

            {/* Yield Filter */}
            <select
              value={yieldFilter}
              onChange={(e) => setYieldFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">All Yields</option>
              <option value="high">High Yield (25+ L/day)</option>
              <option value="medium">Medium Yield (20-25 L/day)</option>
              <option value="low">Standard Yield (&lt;20 L/day)</option>
            </select>

            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span>{filteredBreeds.length} breeds found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breeds Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBreeds.map((breed, index) => (
              <BreedCard key={breed.id} breed={breed} index={index} />
            ))}
          </div>

          {filteredBreeds.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No breeds found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const BreedCard: React.FC<{ breed: Breed; index: number }> = ({ breed, index }) => {
  const availableCows = cows.filter(cow => cow.breedId === breed.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={breed.images[0]} 
          alt={breed.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Premium</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {breed.yieldRange.average}L/day avg
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{breed.name}</h3>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
          </button>
        </div>

        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{breed.origin}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{breed.description}</p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Thermometer className="h-5 w-5 text-orange-600 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Climate</div>
            <div className="text-sm font-semibold">{breed.climate.temperature}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Lactation</div>
            <div className="text-sm font-semibold">{breed.lactationLength} days</div>
          </div>
        </div>

        {/* Available Cows */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Available Cows</span>
            <span className="text-sm text-orange-600 font-semibold">{availableCows.length} slots</span>
          </div>
          <div className="text-xs text-gray-600">Starting from ₹1,00,000</div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Link
            to={`/breeds/${breed.id}`}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
          >
            Learn More
          </Link>
          <Link
            to={`/breeds/${breed.id}#invest`}
            className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors text-center flex items-center justify-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Invest</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const BreedDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const breed = breeds.find(b => b.id === id);
  const availableCows = cows.filter(cow => cow.breedId === id);

  if (!breed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Breed not found</h2>
          <Link to="/breeds" className="text-orange-600 hover:text-orange-700">
            ← Back to breeds
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={breed.images[0]} 
          alt={breed.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{breed.name}</h1>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{breed.origin}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2>About {breed.name}</h2>
                <p>{breed.description}</p>
                
                <h3>Key Characteristics</h3>
                <ul>
                  {breed.characteristics.map(char => (
                    <li key={char}>{char}</li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {breed.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${breed.name} ${index + 1}`}
                      className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stats Card */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Breed Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Yield</span>
                    <span className="font-semibold">{breed.yieldRange.average}L/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yield Range</span>
                    <span className="font-semibold">{breed.yieldRange.min}-{breed.yieldRange.max}L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lactation Period</span>
                    <span className="font-semibold">{breed.lactationLength} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dry Period</span>
                    <span className="font-semibold">{breed.dryPeriod} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gestation</span>
                    <span className="font-semibold">{breed.calvingInfo.gestation} days</span>
                  </div>
                </div>
              </div>

              {/* Available Cows */}
              <div id="invest" className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Cows</h3>
                <div className="space-y-4">
                  {availableCows.map(cow => (
                    <div key={cow.id} className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{cow.name}</h4>
                          <p className="text-sm text-gray-600">Slot: {cow.slotId}</p>
                        </div>
                        <span className="text-lg font-bold text-orange-600">₹{cow.price.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Age: {cow.age} years • Weight: {cow.weight}kg • Status: {cow.status}
                      </div>
                      <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                        Invest Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breeds;