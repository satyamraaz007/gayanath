import { Breed, Cow, MilkRecord, HealthRecord, WalletTransaction, Investor } from '../types';

export const breeds: Breed[] = [
  {
    id: '1',
    name: 'Holstein Friesian',
    origin: 'Netherlands',
    climate: {
      temperature: '15-25°C',
      humidity: '60-70%'
    },
    yieldRange: {
      min: 20,
      max: 40,
      average: 30
    },
    lactationLength: 305,
    dryPeriod: 60,
    calvingInfo: {
      gestation: 283,
      interval: 365
    },
    images: [
      'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ],
    description: 'The Holstein Friesian is the world\'s highest milk-producing dairy breed, known for its distinctive black and white markings.',
    characteristics: ['High milk yield', 'Disease resistant', 'Adaptable to various climates', 'Long productive life']
  },
  {
    id: '2',
    name: 'Gir',
    origin: 'Gujarat, India',
    climate: {
      temperature: '20-35°C',
      humidity: '50-80%'
    },
    yieldRange: {
      min: 15,
      max: 25,
      average: 20
    },
    lactationLength: 300,
    dryPeriod: 65,
    calvingInfo: {
      gestation: 285,
      interval: 400
    },
    images: [
      // 'https://images.pexels.com/photos/1459503/pexels-photo-1459503.jpeg',
      // 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ],
    description: 'An indigenous Indian breed known for its hardy nature and high-quality milk with excellent nutritional properties.',
    characteristics: ['Heat tolerant', 'Disease resistant', 'High butterfat content', 'Long lifespan']
  },
  {
    id: '3',
    name: 'Jersey',
    origin: 'Jersey Island, UK',
    climate: {
      temperature: '10-20°C',
      humidity: '65-75%'
    },
    yieldRange: {
      min: 18,
      max: 28,
      average: 23
    },
    lactationLength: 300,
    dryPeriod: 60,
    calvingInfo: {
      gestation: 279,
      interval: 350
    },
    images: [
      // 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      // 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg'
    ],
    description: 'Jersey cows are known for their rich, creamy milk with high butterfat content and efficient feed conversion.',
    characteristics: ['High butterfat milk', 'Efficient feed conversion', 'Docile temperament', 'Early maturity']
  }
];

export const cows: Cow[] = [
  {
    id: '1',
    breedId: '1',
    slotId: 'A-001',
    investorId: '1',
    price: 100000,
    liveStreamUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    name: 'Bella',
    age: 3,
    weight: 600,
    status: 'healthy'
  },
  {
    id: '2',
    breedId: '2',
    slotId: 'A-002',
    investorId: '1',
    price: 100000,
    liveStreamUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    name: 'Ganga',
    age: 4,
    weight: 450,
    status: 'pregnant'
  }
];

export const milkRecords: MilkRecord[] = [
  {
    id: '1',
    cowId: '1',
    date: '2025-01-15',
    litres: 28,
    quality: 'excellent',
    fat: 4.2,
    protein: 3.4
  },
  {
    id: '2',
    cowId: '1',
    date: '2025-01-14',
    litres: 26,
    quality: 'good',
    fat: 4.0,
    protein: 3.2
  }
];

export const healthRecords: HealthRecord[] = [
  {
    id: '1',
    cowId: '1',
    date: '2025-01-15',
    vitals: {
      temperature: 38.5,
      heartRate: 65,
      activity: 85
    },
    notes: 'Normal health parameters, active and alert',
    vetVisit: false
  }
];

export const walletTransactions: WalletTransaction[] = [
  {
    id: '1',
    investorId: '1',
    date: '2025-01-15',
    type: 'earning',
    amount: 1250,
    description: 'Daily milk revenue - Cow A-001',
    status: 'completed'
  },
  {
    id: '2',
    investorId: '1',
    date: '2025-01-10',
    type: 'withdrawal',
    amount: 5000,
    description: 'Withdrawal to bank account',
    status: 'completed'
  }
];

export const investors: Investor[] = [
  {
    id: '1',
    name: 'Demo Investor',
    email: 'demo@gayanath.com',
    phone: '+91 9876543210',
    kycStatus: 'approved',
    totalInvestment: 200000,
    totalEarnings: 15750,
    walletBalance: 8250,
    cowsOwned: ['1', '2'],
    joinDate: '2024-12-01'
  }
];