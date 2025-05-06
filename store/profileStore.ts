import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface QuizHistoryItem {
  id: string;
  date: string;
  score: number;
  total: number;
  set: number;
  percentage: number;
}

interface ProfileState {
  // User profile
  name: string;
  avatar: string | null;
  
  // Quiz history
  quizHistory: QuizHistoryItem[];
  
  // Stats
  totalQuizzesTaken: number;
  averageScore: number;
  highestScore: number;
  completedSets: number[];
  
  // Actions
  setName: (name: string) => void;
  setAvatar: (avatar: string) => void;
  addQuizResult: (score: number, total: number, quizSet: number) => void;
  clearHistory: () => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      // Initial state
      name: '',
      avatar: null,
      quizHistory: [],
      totalQuizzesTaken: 0,
      averageScore: 0,
      highestScore: 0,
      completedSets: [],
      
      // Set user name
      setName: (name) => {
        set({ name });
      },
      
      // Set user avatar
      setAvatar: (avatar) => {
        set({ avatar });
      },
      
      // Add a quiz result to history
      addQuizResult: (score, total, quizSet) => {
        try {
          const newQuizResult: QuizHistoryItem = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            score,
            total,
            set: quizSet + 1, // Convert from 0-based to 1-based for display
            percentage: (score / total) * 100
          };
          
          const currentHistory = get().quizHistory;
          const quizHistory = [newQuizResult, ...currentHistory];
          
          // Calculate new stats
          const totalQuizzesTaken = quizHistory.length;
          const totalScore = quizHistory.reduce((sum, item) => sum + item.percentage, 0);
          const averageScore = totalScore / totalQuizzesTaken;
          const highestScore = Math.max(get().highestScore, (score / total) * 100);
          
          // Update completed sets
          let completedSets = [...get().completedSets];
          if (!completedSets.includes(quizSet + 1)) {
            completedSets.push(quizSet + 1);
          }
          
          set({
            quizHistory,
            totalQuizzesTaken,
            averageScore,
            highestScore,
            completedSets
          });
        } catch (error) {
          console.error('Error adding quiz result:', error);
        }
      },
      
      // Clear quiz history
      clearHistory: () => {
        set({
          quizHistory: [],
          totalQuizzesTaken: 0,
          averageScore: 0,
          highestScore: 0,
          completedSets: []
        });
      },
      
      // Reset profile
      resetProfile: () => {
        set({
          name: '',
          avatar: null,
          quizHistory: [],
          totalQuizzesTaken: 0,
          averageScore: 0,
          highestScore: 0,
          completedSets: []
        });
      }
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);