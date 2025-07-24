export interface Breed {
  id: string;
  name: string;
  origin: string;
  climate: {
    temperature: string;
    humidity: string;
  };
  yieldRange: {
    min: number;
    max: number;
    average: number;
  };
  lactationLength: number;
  dryPeriod: number;
  calvingInfo: {
    gestation: number;
    interval: number;
  };
  images: string[];
  description: string;
  characteristics: string[];
}

export interface Cow {
  id: string;
  breedId: string;
  slotId: string;
  investorId: string;
  price: number;
  liveStreamUrl: string;
  name: string;
  age: number;
  weight: number;
  status: 'healthy' | 'under-care' | 'pregnant';
}

export interface MilkRecord {
  id: string;
  cowId: string;
  date: string;
  litres: number;
  quality: 'excellent' | 'good' | 'average';
  fat: number;
  protein: number;
}

export interface HealthRecord {
  id: string;
  cowId: string;
  date: string;
  vitals: {
    temperature: number;
    heartRate: number;
    activity: number;
  };
  notes: string;
  vetVisit: boolean;
}

export interface WalletTransaction {
  id: string;
  investorId: string;
  date: string;
  type: 'earning' | 'withdrawal' | 'investment';
  amount: number;
  description: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface Investor {
  id: string;
  name: string;
  email: string;
  phone: string;
  kycStatus: 'pending' | 'approved' | 'rejected';
  totalInvestment: number;
  totalEarnings: number;
  walletBalance: number;
  cowsOwned: string[];
  joinDate: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}