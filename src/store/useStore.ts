import { create } from 'zustand';
import { Investor, ChatMessage } from '../types';
import { investors } from '../data/mockData';

interface AppState {
  currentUser: Investor | null;
  isLoggedIn: boolean;
  chatMessages: ChatMessage[];
  isChatOpen: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addChatMessage: (message: ChatMessage) => void;
  toggleChat: () => void;
  setChatOpen: (open: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  currentUser: null,
  isLoggedIn: false,
  chatMessages: [
    {
      id: '1',
      text: 'Welcome to GAYANATH, How can we help you?',
      sender: 'bot',
      timestamp: new Date()
    }
  ],
  isChatOpen: false,
  
  login: (email: string, password: string) => {
    if (email === 'demo@gayanath.com' && password === 'Demo@123') {
      set({
        currentUser: investors[0],
        isLoggedIn: true
      });
      return true;
    }
    return false;
  },
  
  logout: () => {
    set({
      currentUser: null,
      isLoggedIn: false
    });
  },
  
  addChatMessage: (message: ChatMessage) => {
    set(state => ({
      chatMessages: [...state.chatMessages, message]
    }));
  },
  
  toggleChat: () => {
    set(state => ({
      isChatOpen: !state.isChatOpen
    }));
  },
  
  setChatOpen: (open: boolean) => {
    set({ isChatOpen: open });
  }
}));