import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { quizQuestions, QuizQuestion } from '@/mocks/quizData';

// Number of questions per quiz set
const QUESTIONS_PER_SET = 10;

interface QuizState {
  // Quiz data
  allQuestions: QuizQuestion[];
  currentSetQuestions: QuizQuestion[];
  currentQuestionIndex: number;
  currentQuizSet: number;
  
  // User answers and results
  answers: number[];
  quizCompleted: boolean;
  quizStartTime: number | null;
  quizEndTime: number | null;
  
  // Quiz history
  quizHistory: {
    date: string;
    score: number;
    totalQuestions: number;
    timeSpent: number;
    set: number;
  }[];
  
  // Additional state for tracking perfect scores and sets
  perfectScores: number[]; // Array of set numbers with perfect scores
  quizSets: number[]; // Array of available set numbers
  
  // Computed properties
  score: number;
  
  // Actions
  initializeQuiz: () => void;
  answerQuestion: (questionIndex: number, answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
  resetAllQuizData: () => void;
  advanceToNextSet: () => void;
  isPerfectScore: () => boolean;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      // Initial state
      allQuestions: [],
      currentSetQuestions: [],
      currentQuestionIndex: 0,
      currentQuizSet: 0,
      answers: [],
      quizCompleted: false,
      quizStartTime: null,
      quizEndTime: null,
      quizHistory: [],
      perfectScores: [],
      quizSets: Array.from({ length: Math.ceil(quizQuestions.length / QUESTIONS_PER_SET) }, (_, i) => i),
      score: 0,
      
      // Initialize quiz with questions for the current language
      initializeQuiz: () => {
        console.log('Initializing quiz');
        
        try {
          // Get all questions
          const allQuestionsForLanguage = quizQuestions;
          
          // Shuffle questions
          const shuffledQuestions = [...allQuestionsForLanguage].sort(() => Math.random() - 0.5);
          
          // Get current set based on the currentQuizSet index
          const currentSet = get().currentQuizSet;
          const startIndex = currentSet * QUESTIONS_PER_SET;
          const currentSetQuestions = shuffledQuestions.slice(startIndex, startIndex + QUESTIONS_PER_SET);
          
          console.log(`Loaded ${currentSetQuestions.length} questions for set ${currentSet + 1}`);
          
          set({
            allQuestions: shuffledQuestions,
            currentSetQuestions,
            currentQuestionIndex: 0,
            answers: new Array(currentSetQuestions.length).fill(-1),
            quizCompleted: false,
            quizStartTime: Date.now(),
            quizEndTime: null
          });
        } catch (error) {
          console.error('Error initializing quiz:', error);
          // Set some fallback state to prevent crashes
          set({
            allQuestions: [],
            currentSetQuestions: [],
            currentQuestionIndex: 0,
            answers: [],
            quizCompleted: false,
            quizStartTime: Date.now(),
            quizEndTime: null
          });
        }
      },
      
      // Record user's answer for a question
      answerQuestion: (questionIndex, answerIndex) => {
        const answers = [...get().answers];
        answers[questionIndex] = answerIndex;
        set({ answers });
      },
      
      // Move to the next question
      nextQuestion: () => {
        const { currentQuestionIndex, currentSetQuestions } = get();
        if (currentQuestionIndex < currentSetQuestions.length - 1) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
        }
      },
      
      // Move to the previous question
      previousQuestion: () => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex > 0) {
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
        }
      },
      
      // Complete the quiz and record results
      completeQuiz: () => {
        try {
          const { currentSetQuestions, answers, currentQuizSet } = get();
          const quizEndTime = Date.now();
          const quizStartTime = get().quizStartTime || quizEndTime;
          const timeSpent = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
          
          // Calculate score
          let correctAnswers = 0;
          for (let i = 0; i < currentSetQuestions.length; i++) {
            if (answers[i] === currentSetQuestions[i].correctAnswer) {
              correctAnswers++;
            }
          }
          
          const score = correctAnswers;
          
          // Add to history
          const quizHistory = [...get().quizHistory];
          quizHistory.push({
            date: new Date().toISOString(),
            score,
            totalQuestions: currentSetQuestions.length,
            timeSpent,
            set: currentQuizSet + 1
          });
          
          // Check for perfect score
          let perfectScores = [...get().perfectScores];
          if (score === currentSetQuestions.length && !perfectScores.includes(currentQuizSet)) {
            perfectScores.push(currentQuizSet);
          }
          
          // Update state
          set({
            quizCompleted: true,
            quizEndTime,
            quizHistory,
            score,
            perfectScores,
            // Move to next set for next quiz if perfect score achieved
            currentQuizSet: score === currentSetQuestions.length 
              ? (currentQuizSet + 1) % Math.ceil(quizQuestions.length / QUESTIONS_PER_SET)
              : currentQuizSet
          });
        } catch (error) {
          console.error('Error completing quiz:', error);
          // Set some fallback state to prevent crashes
          set({
            quizCompleted: true,
            quizEndTime: Date.now(),
            score: 0
          });
        }
      },
      
      // Reset current quiz
      resetQuiz: () => {
        set({
          currentQuestionIndex: 0,
          answers: new Array(get().currentSetQuestions.length).fill(-1),
          quizCompleted: false,
          quizStartTime: Date.now(),
          quizEndTime: null
        });
      },
      
      // Reset all quiz data
      resetAllQuizData: () => {
        set({
          allQuestions: [],
          currentSetQuestions: [],
          currentQuestionIndex: 0,
          currentQuizSet: 0,
          answers: [],
          quizCompleted: false,
          quizStartTime: null,
          quizEndTime: null,
          quizHistory: [],
          perfectScores: [],
          score: 0
        });
      },
      
      // Advance to next set
      advanceToNextSet: () => {
        const { currentQuizSet } = get();
        const totalSets = Math.ceil(quizQuestions.length / QUESTIONS_PER_SET);
        set({
          currentQuestionIndex: 0,
          answers: [],
          quizCompleted: false,
          quizStartTime: null,
          quizEndTime: null,
          currentQuizSet: (currentQuizSet + 1) % totalSets
        });
      },
      
      // Check if current score is perfect
      isPerfectScore: () => {
        const { score, currentSetQuestions } = get();
        return score === currentSetQuestions.length;
      }
    }),
    {
      name: 'quiz-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);