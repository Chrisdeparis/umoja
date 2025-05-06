import { create } from 'zustand';
import { useQuizStore } from './quizStore';
import { useProfileStore } from './profileStore';
import { useOnboardingStore } from './onboardingStore';
import { useSubscriptionStore } from './subscriptionStore';
import { Alert, Platform } from 'react-native';

interface ResetState {
  isResetting: boolean;
  setIsResetting: (isResetting: boolean) => void;
  resetApp: () => Promise<void>;
}

export const useResetStore = create<ResetState>((set, get) => ({
  isResetting: false,
  
  setIsResetting: (isResetting: boolean) => {
    set({ isResetting });
  },
  
  resetApp: async (): Promise<void> => {
    const resetAllData = async (): Promise<void> => {
      try {
        set({ isResetting: true });
        
        // Reset all stores
        useQuizStore.getState().resetAllQuizData();
        useProfileStore.getState().resetProfile();
        useOnboardingStore.getState().resetOnboarding();
        useSubscriptionStore.getState().resetSubscription();
        
        console.log('All app data has been reset');
        
        // Delay to ensure all async operations complete
        await new Promise(resolve => setTimeout(resolve, 500));
        
        set({ isResetting: false });
      } catch (error) {
        console.error('Error resetting app data:', error);
        set({ isResetting: false });
        throw error;
      }
    };
    
    // Confirm before resetting
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(
        "Are you sure you want to reset all app data? This action cannot be undone."
      );
      
      if (confirmed) {
        await resetAllData();
      }
    } else {
      return new Promise((resolve, reject) => {
        Alert.alert(
          "Reset App Data",
          "Are you sure you want to reset all app data? This action cannot be undone.",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => resolve()
            },
            {
              text: "Reset",
              style: "destructive",
              onPress: async () => {
                try {
                  await resetAllData();
                  resolve();
                } catch (error) {
                  reject(error);
                }
              }
            }
          ]
        );
      });
    }
  }
}));