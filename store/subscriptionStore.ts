import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

interface SubscriptionState {
  isPremium: boolean;
  freeQuizzesRemaining: number;
  freeQuizzesTotal: number;
  lastResetDate: string | null;
  
  // Actions
  useQuiz: () => boolean;
  resetFreeQuizzes: () => void;
  setPremium: (isPremium: boolean) => void;
  resetSubscription: () => void;
  subscribeToPremium: (months: number) => void;
  restorePurchase: () => Promise<boolean>;
}

// Default number of free quizzes
const DEFAULT_FREE_QUIZZES = 3;

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set, get) => ({
      isPremium: false,
      freeQuizzesRemaining: DEFAULT_FREE_QUIZZES,
      freeQuizzesTotal: DEFAULT_FREE_QUIZZES,
      lastResetDate: null,
      
      // Use a quiz - returns true if successful, false if no quizzes remaining
      useQuiz: () => {
        const { isPremium, freeQuizzesRemaining } = get();
        
        // Premium users don't consume free quizzes
        if (isPremium) {
          return true;
        }
        
        // Check if user has free quizzes remaining
        if (freeQuizzesRemaining <= 0) {
          return false;
        }
        
        // Use a free quiz
        set(state => ({
          freeQuizzesRemaining: state.freeQuizzesRemaining - 1
        }));
        
        return true;
      },
      
      // Reset free quizzes (e.g., on a new day)
      resetFreeQuizzes: () => {
        set({
          freeQuizzesRemaining: DEFAULT_FREE_QUIZZES,
          lastResetDate: new Date().toISOString()
        });
      },
      
      // Set premium status
      setPremium: (isPremium) => {
        set({ isPremium });
      },
      
      // Reset subscription state (for app reset)
      resetSubscription: () => {
        set({
          isPremium: false,
          freeQuizzesRemaining: DEFAULT_FREE_QUIZZES,
          freeQuizzesTotal: DEFAULT_FREE_QUIZZES,
          lastResetDate: null
        });
      },
      
      // Subscribe to premium (mock implementation)
      subscribeToPremium: (months) => {
        console.log(`Subscribing to premium for ${months} months`);
        set({ 
          isPremium: true,
          // Reset free quizzes as well when subscribing
          freeQuizzesRemaining: DEFAULT_FREE_QUIZZES
        });
      },
      
      // Restore purchase (mock implementation)
      restorePurchase: async () => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For testing purposes, we'll simulate a successful restore 50% of the time
        // In a real app, this would check with the app store
        const success = Math.random() > 0.5;
        
        if (success) {
          set({ isPremium: true });
        }
        
        return success;
      }
    }),
    {
      name: 'subscription-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);