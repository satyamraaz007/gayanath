import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  TrendingUp, 
  Heart, 
  Wallet, 
  Plus, 
  Bell,
  Calendar,
  Activity,
  DollarSign,
  Download,
  Eye,
  Settings,
  LogOut,
  User,
  CreditCard,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useStore } from '../store/useStore';
import { cows, milkRecords, healthRecords, walletTransactions, breeds } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { currentUser, logout } = useStore();

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">Please log in to access your dashboard</p>
        </div>
      </div>
    );
  }

  const userCows = cows.filter(cow => cow.investorId === currentUser.id);
  const userMilkRecords = milkRecords.filter(record => 
    userCows.some(cow => cow.id === record.cowId)
  );
  const userHealthRecords = healthRecords.filter(record => 
    userCows.some(cow => cow.id === record.cowId)
  );
  const userTransactions = walletTransactions.filter(tx => tx.investorId === currentUser.id);

  // Mock data for charts
  const milkData = [
    { date: '2025-01-10', litres: 25 },
    { date: '2025-01-11', litres: 28 },
    { date: '2025-01-12', litres: 26 },
    { date: '2025-01-13', litres: 30 },
    { date: '2025-01-14', litres: 27 },
    { date: '2025-01-15', litres: 29 },
    { date: '2025-01-16', litres: 31 }
  ];

  const revenueData = [
    { month: 'Sep', revenue: 3200 },
    { month: 'Oct', revenue: 3800 },
    { month: 'Nov', revenue: 3500 },
    { month: 'Dec', revenue: 4200 },
    { month: 'Jan', revenue: 3900 }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'live', name: 'Live Feed', icon: Video },
    { id: 'milk', name: 'Milk History', icon: TrendingUp },
    { id: 'health', name: 'Health Records', icon: Heart },
    { id: 'revenue', name: 'Revenue', icon: Wallet },
    { id: 'invest', name: 'Invest More', icon: Plus },
    { id: 'profile', name: 'Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {currentUser.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={logout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && <OverviewTab currentUser={currentUser} userCows={userCows} />}
            {activeTab === 'live' && <LiveFeedTab userCows={userCows} />}
            {activeTab === 'milk' && <MilkHistoryTab milkData={milkData} />}
            {activeTab === 'health' && <HealthRecordsTab userHealthRecords={userHealthRecords} />}
            {activeTab === 'revenue' && <RevenueTab revenueData={revenueData} userTransactions={userTransactions} currentUser={currentUser} />}
            {activeTab === 'invest' && <InvestMoreTab />}
            {activeTab === 'profile' && <ProfileTab currentUser={currentUser} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewTab: React.FC<{ currentUser: any; userCows: any[] }> = ({ currentUser, userCows }) => (
  <div className="space-y-6">
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <Heart className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Cows</p>
            <p className="text-2xl font-bold text-gray-900">{userCows.length}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Investment</p>
            <p className="text-2xl font-bold text-gray-900">₹{currentUser.totalInvestment.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Earnings</p>
            <p className="text-2xl font-bold text-gray-900">₹{currentUser.totalEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <Wallet className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Wallet Balance</p>
            <p className="text-2xl font-bold text-gray-900">₹{currentUser.walletBalance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>

    {/* My Cows */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">My Cows</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userCows.map((cow) => {
          const breed = breeds.find(b => b.id === cow.breedId);
          return (
            <div key={cow.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={breed?.images[0]} 
                  alt={cow.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{cow.name}</h4>
                  <p className="text-sm text-gray-600">Slot: {cow.slotId}</p>
                  <p className="text-sm text-gray-600">Breed: {breed?.name}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      cow.status === 'healthy' ? 'bg-green-100 text-green-600' :
                      cow.status === 'pregnant' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {cow.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const LiveFeedTab: React.FC<{ userCows: any[] }> = ({ userCows }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Live CCTV Feeds</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userCows.map((cow) => (
          <div key={cow.id} className="space-y-4">
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <video
                className="w-full h-full object-cover"
                poster={`https://images.pexels.com/photos/${1200000 + parseInt(cow.id)}/pexels-photo-${1200000 + parseInt(cow.id)}.jpeg?w=600&h=400`}
                controls
              >
                <source src={cow.liveStreamUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">{cow.name}</h4>
                <p className="text-sm text-gray-600">Slot: {cow.slotId}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600">Live</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MilkHistoryTab: React.FC<{ milkData: any[] }> = ({ milkData }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Milk Production Trends</h3>
        <button className="flex items-center space-x-2 text-green-600 hover:text-green-700">
          <Download className="h-4 w-4" />
          <span>Export Data</span>
        </button>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={milkData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="litres" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Milk Records</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Litres</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Quality</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Fat %</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Protein %</th>
            </tr>
          </thead>
          <tbody>
            {milkData.map((record, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">{record.date}</td>
                <td className="py-3 px-4 text-gray-700">{record.litres}L</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    Excellent
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">4.2%</td>
                <td className="py-3 px-4 text-gray-700">3.4%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HealthRecordsTab: React.FC<{ userHealthRecords: any[] }> = ({ userHealthRecords }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Health Monitoring</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-600">98%</p>
          <p className="text-sm text-gray-600">Health Score</p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-blue-600">65 BPM</p>
          <p className="text-sm text-gray-600">Heart Rate</p>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-orange-600">85%</p>
          <p className="text-sm text-gray-600">Activity Level</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Temperature</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Heart Rate</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Activity</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Notes</th>
            </tr>
          </thead>
          <tbody>
            {userHealthRecords.map((record) => (
              <tr key={record.id} className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">{record.date}</td>
                <td className="py-3 px-4 text-gray-700">{record.vitals.temperature}°C</td>
                <td className="py-3 px-4 text-gray-700">{record.vitals.heartRate} BPM</td>
                <td className="py-3 px-4 text-gray-700">{record.vitals.activity}%</td>
                <td className="py-3 px-4 text-gray-700">{record.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const RevenueTab: React.FC<{ revenueData: any[]; userTransactions: any[]; currentUser: any }> = ({ 
  revenueData, 
  userTransactions, 
  currentUser 
}) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Revenue Overview</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Wallet Balance</h3>
          <Wallet className="h-6 w-6 text-green-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-4">₹{currentUser.walletBalance.toLocaleString()}</p>
        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Withdraw Funds
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {userTransactions.slice(0, 3).map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </div>
              <span className={`font-semibold ${
                transaction.type === 'earning' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'earning' ? '+' : '-'}₹{transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const InvestMoreTab: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Investment Opportunities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breeds.map((breed) => (
          <div key={breed.id} className="border border-gray-200 rounded-lg p-6">
            <img 
              src={breed.images[0]} 
              alt={breed.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-gray-900 mb-2">{breed.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{breed.origin}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Avg Yield</span>
              <span className="font-semibold">{breed.yieldRange.average}L/day</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Investment</span>
              <span className="font-semibold text-green-600">₹1,00,000</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProfileTab: React.FC<{ currentUser: any }> = ({ currentUser }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={currentUser.name}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={currentUser.email}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={currentUser.phone}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">KYC Status</label>
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentUser.kycStatus === 'approved' ? 'bg-green-100 text-green-600' :
              currentUser.kycStatus === 'pending' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {currentUser.kycStatus}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-blue-600">₹{currentUser.totalInvestment.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Total Investment</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-600">₹{currentUser.totalEarnings.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Total Earnings</p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-purple-600">{currentUser.cowsOwned.length}</p>
          <p className="text-sm text-gray-600">Cows Owned</p>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;