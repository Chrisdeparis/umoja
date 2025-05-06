import React, { useState, useRef, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  Platform,
  Alert,
  ScrollView,
  PanResponder,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, X, Crown } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import { theme, globalStyles } from '@/constants/theme';
import { useQuizStore } from '@/store/quizStore';
import { useLanguageStore } from '@/store/languageStore';
import { useSubscriptionStore } from '@/store/subscriptionStore';
import QuizCard from '@/components/QuizCard';
import ProgressBar from '@/components/ProgressBar';
import * as Haptics from 'expo-haptics';
import { QuizQuestion } from '@/mocks/quizData';

const { height, width } = Dimensions.get('window');

export default function QuizScreen() {
  const router = useRouter();
  const {
    currentSetQuestions,
    currentQuestionIndex,
    answers,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuiz,
    currentQuizSet,
    initializeQuiz,
  } = useQuizStore();
  const { t, currentLanguage } = useLanguageStore();
  const { isPremium, freeQuizzesRemaining, useQuiz } = useSubscriptionStore();
  
  // All animation refs
  const animationRef = useRef(null);
  const cardRef = useRef(null);
  const scrollViewRef = useRef(null);
  
  // All state hooks
  const [showAnswer, setShowAnswer] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // All animation value hooks
  const translateX = useSharedValue(0);
  const cardOpacity = useSharedValue(1);
  const scale = useSharedValue(1);
  
  // Initialize quiz if needed
  useEffect(() => {
    const loadQuiz = async () => {
      setIsLoading(true);
      try {
        // Check if user can take a quiz
        const canTakeQuiz = useQuiz();
        
        if (!canTakeQuiz) {
          if (Platform.OS === 'web') {
            alert("No free quizzes left. Subscribe to premium for unlimited quizzes.");
            router.replace('/subscription');
            return;
          } else {
            Alert.alert(
              "No free quizzes left",
              "Subscribe to premium for unlimited quizzes",
              [
                { text: "Cancel", onPress: () => router.back() },
                { text: "Subscribe", onPress: () => router.replace('/subscription') }
              ]
            );
            return;
          }
        }
        
        // Initialize the quiz if needed
        if (!currentSetQuestions || currentSetQuestions.length === 0) {
          console.log('Initializing quiz...');
          initializeQuiz();
        }
      } catch (err) {
        console.error('Error loading quiz:', err);
        setError("Failed to load quiz. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadQuiz();
  }, [currentSetQuestions, initializeQuiz, router, t, useQuiz]);
  
  // Update current question when index changes
  useEffect(() => {
    if (currentSetQuestions && currentSetQuestions.length > 0 && 
        currentQuestionIndex >= 0 && currentQuestionIndex < currentSetQuestions.length) {
      setCurrentQuestion(currentSetQuestions[currentQuestionIndex]);
      // Reset states for new question
      setShowAnswer(false);
      setRevealAnswer(false);
      // Reset animations
      translateX.value = 0;
      cardOpacity.value = 1;
      scale.value = 1;
    }
  }, [currentQuestionIndex, currentSetQuestions, translateX, cardOpacity, scale]);

  // Handle answer selection
  const handleAnswerSelect = (index: number) => {
    if (!currentQuestion) return;
    
    // Record the answer
    answerQuestion(currentQuestionIndex, index);
    
    // Show feedback
    setShowAnswer(true);
    
    // If the answer is correct, automatically reveal the explanation
    if (index === currentQuestion.correctAnswer) {
      setRevealAnswer(true);
    }
    
    // Haptics for selection
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    }
  };
  
  // Handle reveal answer
  const handleRevealAnswer = () => {
    setRevealAnswer(true);
    
    // Haptics for reveal
    if (Platform.OS !== 'web') {
      try {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    }
  };
  
  // Handle next question
  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Animate out
    try {
      cardOpacity.value = withTiming(0, { duration: 300 });
      translateX.value = withTiming(-width, { duration: 300 });
    } catch (error) {
      console.error('Animation error:', error);
      // Fallback if animation fails
      cardOpacity.value = 0;
    }
    
    setTimeout(() => {
      nextQuestion();
      setIsTransitioning(false);
      
      // Animate back in
      try {
        cardOpacity.value = withTiming(1, { duration: 300 });
        translateX.value = withTiming(0, { duration: 300 });
      } catch (error) {
        console.error('Animation error:', error);
        cardOpacity.value = 1;
        translateX.value = 0;
      }
    }, 300);
  };
  
  // Handle previous question
  const handlePrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Animate out
    try {
      cardOpacity.value = withTiming(0, { duration: 300 });
      translateX.value = withTiming(width, { duration: 300 });
    } catch (error) {
      console.error('Animation error:', error);
      cardOpacity.value = 0;
    }
    
    setTimeout(() => {
      previousQuestion();
      setIsTransitioning(false);
      
      // Animate back in
      try {
        cardOpacity.value = withTiming(1, { duration: 300 });
        translateX.value = withTiming(0, { duration: 300 });
      } catch (error) {
        console.error('Animation error:', error);
        cardOpacity.value = 1;
        translateX.value = 0;
      }
    }, 300);
  };
  
  // Handle finish quiz
  const handleFinish = () => {
    completeQuiz();
    router.push('/results');
  };
  
  // Handle exit quiz
  const handleExit = () => {
    if (Platform.OS === 'web') {
      router.back();
    } else {
      Alert.alert(
        t('quiz.exitTitle'),
        t('quiz.exitMessage'),
        [
          { text: t('cancel'), style: 'cancel' },
          { text: t('quiz.exit'), onPress: () => router.back(), style: 'destructive' }
        ]
      );
    }
  };
  
  // PanResponder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Only respond to horizontal swipes that are more horizontal than vertical
        // and have moved a minimum distance to avoid capturing small movements
        const isHorizontalSwipe = Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 2);
        const hasMovedEnough = Math.abs(gestureState.dx) > 15;
        
        // Don't capture the gesture if we're scrolling vertically
        if (isScrolling) return false;
        
        return isHorizontalSwipe && hasMovedEnough;
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        // Similar logic as above, but for capture phase
        const isHorizontalSwipe = Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 2);
        const hasMovedEnough = Math.abs(gestureState.dx) > 15;
        
        if (isScrolling) return false;
        
        return isHorizontalSwipe && hasMovedEnough;
      },
      onPanResponderGrant: () => {
        // When the gesture starts, set a starting point
        scale.value = withTiming(0.98, { duration: 100 });
      },
      onPanResponderMove: (evt, gestureState) => {
        // Update the position of the card as the user swipes
        translateX.value = gestureState.dx;
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Reset scale when gesture ends
        scale.value = withTiming(1, { duration: 200 });
        
        if (isTransitioning) return;
        
        const { dx } = gestureState;
        
        // Threshold for swipe detection (adjust as needed)
        const swipeThreshold = width * 0.2;
        
        if (dx > swipeThreshold && currentQuestionIndex > 0) {
          // Swipe right to go to previous question
          console.log('Swiping right to previous question');
          handlePrevious();
        } else if (dx < -swipeThreshold && currentQuestionIndex < (currentSetQuestions?.length || 0) - 1) {
          // Swipe left to go to next question
          console.log('Swiping left to next question');
          handleNext();
        } else {
          // If swipe is not significant, animate back to original position
          translateX.value = withSpring(0, {
            damping: 20,
            stiffness: 200,
          });
        }
      },
      onPanResponderTerminate: () => {
        // If the gesture is cancelled, reset the position
        translateX.value = withSpring(0);
        scale.value = withTiming(1, { duration: 200 });
      },
    })
  ).current;
  
  // Animated styles for card
  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { scale: scale.value },
      ],
      opacity: cardOpacity.value,
    };
  });
  
  // If loading
  if (isLoading) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <StatusBar style="light" />
        <View style={styles.loaderContainer}>
          <Text style={styles.loaderText}>{t('quiz.loading')}</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  // If error
  if (error || !currentQuestion) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <StatusBar style="light" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error || t('quiz.errorLoadingQuestion')}</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={() => {
              setError(null);
              initializeQuiz();
            }}
          >
            <Text style={styles.retryButtonText}>{t('retry')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  // Check if this is the last question
  const isLastQuestion = currentQuestionIndex === (currentSetQuestions?.length || 0) - 1;
  
  // Get selected answer for current question
  const selectedAnswer = answers[currentQuestionIndex] !== undefined ? answers[currentQuestionIndex] : -1;
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleExit}
          >
            <X size={24} color={theme.colors.text} />
          </TouchableOpacity>
          
          <Text style={styles.quizTitle}>
            {currentQuizSet ? `${t('quiz.quizSet')} ${currentQuizSet}` : t('quiz.quiz')}
          </Text>
          
          <View style={styles.placeholder} />
        </View>
        
        {/* Progress */}
        <View style={styles.progressContainer}>
          <ProgressBar 
            current={currentQuestionIndex + 1}
            total={currentSetQuestions?.length || 1}
          />
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} / {currentSetQuestions?.length || 1}
          </Text>
        </View>
        
        {/* Content */}
        <View style={styles.contentContainer}>
          {/* Card Container with swipe gesture */}
          <View style={styles.cardContainerWrapper} {...panResponder.panHandlers}>
            <ScrollView
              ref={scrollViewRef}
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={true}
              onScrollBeginDrag={() => setIsScrolling(true)}
              onScrollEndDrag={() => setTimeout(() => setIsScrolling(false), 50)}
              onMomentumScrollBegin={() => setIsScrolling(true)}
              onMomentumScrollEnd={() => setTimeout(() => setIsScrolling(false), 50)}
            >
              <Animated.View style={[styles.cardContainer, cardAnimatedStyle]}>
                <QuizCard 
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  onSelectAnswer={handleAnswerSelect}
                  showAnswer={showAnswer}
                  revealAnswer={revealAnswer}
                  onRevealAnswer={handleRevealAnswer}
                />
              </Animated.View>
            </ScrollView>
          </View>
          
          {/* Swipe Indicators */}
          <View style={styles.swipeIndicatorsContainer}>
            {currentQuestionIndex > 0 && (
              <View style={styles.swipeIndicator}>
                <ArrowLeft size={20} color={theme.colors.subtext} />
                <Text style={styles.swipeIndicatorText}>{t('quiz.swipePrevious')}</Text>
              </View>
            )}
            
            {currentQuestionIndex < (currentSetQuestions?.length || 0) - 1 && (
              <View style={styles.swipeIndicator}>
                <Text style={styles.swipeIndicatorText}>{t('quiz.swipeNext')}</Text>
                <ArrowRight size={20} color={theme.colors.subtext} />
              </View>
            )}
          </View>
          
          {/* Navigation Buttons */}
          <View style={styles.navigationContainer}>
            {isLastQuestion ? (
              <TouchableOpacity 
                style={[styles.navButton, styles.finishButton]}
                onPress={handleFinish}
                disabled={isTransitioning || selectedAnswer === -1}
              >
                <Crown size={20} color={theme.colors.text} />
                <Text style={styles.navButtonText}>{t('quiz.finish')}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                style={[styles.navButton, styles.nextButton]}
                onPress={handleNext}
                disabled={isTransitioning}
              >
                <Text style={styles.navButtonText}>
                  {showAnswer ? t('quiz.next') : t('quiz.skip')}
                </Text>
                <ArrowRight size={20} color={theme.colors.text} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    fontSize: 18,
    color: theme.colors.text,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  errorText: {
    fontSize: 18,
    color: theme.colors.incorrect,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
  },
  retryButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  placeholder: {
    width: 40,
  },
  progressContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  progressText: {
    fontSize: 14,
    color: theme.colors.subtext,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: theme.spacing.xl,
  },
  cardContainerWrapper: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    justifyContent: 'center',
  },
  swipeIndicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
  swipeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  swipeIndicatorText: {
    fontSize: 14,
    color: theme.colors.subtext,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    minHeight: 60, // Ensure the navigation container has a minimum height
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
    minWidth: 120,
  },
  prevButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
  },
  finishButton: {
    backgroundColor: theme.colors.primary,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
});