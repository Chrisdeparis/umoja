import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions, Platform, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '@/constants/theme';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useLanguageStore } from '@/store/languageStore';
import * as Haptics from 'expo-haptics';
import { QuizQuestion } from '@/mocks/quizData';
import { Eye } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface QuizCardProps {
  question: QuizQuestion | null;
  selectedAnswer: number;
  onSelectAnswer: (index: number) => void;
  showAnswer: boolean;
  revealAnswer: boolean;
  onRevealAnswer: () => void;
}

export default function QuizCard({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  showAnswer,
  revealAnswer,
  onRevealAnswer
}: QuizCardProps) {
  const { t, currentLanguage } = useLanguageStore();
  
  // Define all animation values at the top level
  const animationValues = [
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
  ];
  
  const cardScale = useSharedValue(0.9);
  const cardOpacity = useSharedValue(0);

  useEffect(() => {
    // Reset animations when question changes
    animationValues.forEach(value => {
      value.value = 0;
    });
    
    // Animate card entrance
    cardScale.value = 0.9;
    cardOpacity.value = 0;
    
    try {
      cardOpacity.value = withTiming(1, { duration: 300 });
      cardScale.value = withTiming(1, { 
        duration: 400,
        easing: Easing.out(Easing.cubic)
      });
    } catch (error) {
      console.error('Animation error:', error);
      // Fallback in case animation fails
      cardOpacity.value = 1;
      cardScale.value = 1;
    }
  }, [question?.id, animationValues]);

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== -1 || showAnswer) return;
    
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    }
    
    onSelectAnswer(index);
    
    // Animate the selected option
    try {
      animationValues[index].value = withTiming(1, { duration: 300 });
      
      // Animate other options
      for (let i = 0; i < 4; i++) {
        if (i !== index) {
          animationValues[i].value = withTiming(0.5, { duration: 300 });
        }
      }
    } catch (error) {
      console.error('Animation error:', error);
    }
  };

  // Define all animated styles at the top level
  const optionAnimatedStyles = animationValues.map((_, index) => {
    return useAnimatedStyle(() => {
      if (!question) return { backgroundColor: theme.colors.card, opacity: 1 };
      
      const isCorrect = index === question.correctAnswer;
      const isSelected = index === selectedAnswer;
      const shouldHighlight = showAnswer && (isCorrect || isSelected);
      
      let backgroundColor = theme.colors.card;
      
      if (shouldHighlight) {
        // Only highlight the correct answer if revealAnswer is true
        // Otherwise, only highlight the selected answer if it's wrong
        if (revealAnswer && isCorrect) {
          backgroundColor = theme.colors.correct;
        } else if (isSelected) {
          backgroundColor = isCorrect ? theme.colors.correct : theme.colors.incorrect;
        }
      }
      
      // Reduce opacity for non-selected options when an answer is selected
      // But don't reduce opacity for the correct answer if it should be revealed
      const opacity = showAnswer && !isSelected && !(revealAnswer && isCorrect) ? 0.6 : 1;
      
      return {
        backgroundColor,
        opacity,
      };
    });
  });
  
  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cardScale.value }],
      opacity: cardOpacity.value,
    };
  });

  // Fallback for missing question
  if (!question) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{t('quiz.errorLoadingQuestion')}</Text>
      </View>
    );
  }

  // Safely get translated content
  // First check if translations exist, if not use direct properties
  let questionText = question.question || "";
  let options = question.options || [];
  let explanation = question.explanation || "";

  // If translations exist, try to use them
  if (question.translations) {
    try {
      const translations = question.translations || {};
      // Safely access translations with fallbacks
      const translatedContent = translations[currentLanguage] || translations['en'] || { 
        question: questionText,
        options: options,
        explanation: explanation
      };
      
      questionText = translatedContent.question || questionText;
      options = translatedContent.options || options;
      explanation = translatedContent.explanation || explanation;
    } catch (error) {
      console.error('Error accessing translations:', error);
      // Keep using the default values if there's an error
    }
  }

  // Determine if the selected answer is wrong
  const isWrongAnswer = selectedAnswer !== -1 && selectedAnswer !== question.correctAnswer;
  
  // Show the reveal button only if a wrong answer is selected and the answer hasn't been revealed yet
  const showRevealButton = isWrongAnswer && showAnswer && !revealAnswer;

  return (
    <View style={styles.container}>
      {question.imageUrl && (
        <Image
          source={{ uri: question.imageUrl }}
          style={styles.image}
          contentFit="cover"
          transition={500}
        />
      )}
      
      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>
          {question.category ? question.category.charAt(0).toUpperCase() + question.category.slice(1) : 'General'}
        </Text>
      </View>
      
      <Text style={styles.question}>{questionText}</Text>
      
      <View style={styles.optionsContainer}>
        {options.map((option: string, index: number) => (
          <AnimatedPressable
            key={index}
            style={[styles.option, optionAnimatedStyles[index]]}
            onPress={() => handleSelectAnswer(index)}
            disabled={selectedAnswer !== -1 || showAnswer}
          >
            <View style={styles.optionContent}>
              <View style={styles.optionIndex}>
                <Text style={styles.optionIndexText}>{String.fromCharCode(65 + index)}</Text>
              </View>
              <Text style={styles.optionText}>{option}</Text>
            </View>
            
            {showAnswer && revealAnswer && index === question.correctAnswer && (
              <View style={styles.correctBadge}>
                <Text style={styles.correctBadgeText}>{t('quiz.correct')}</Text>
              </View>
            )}
          </AnimatedPressable>
        ))}
      </View>
      
      {/* Wrong answer message */}
      {isWrongAnswer && showAnswer && !revealAnswer && (
        <View style={styles.wrongAnswerContainer}>
          <Text style={styles.wrongAnswerText}>{t('quiz.wrongAnswer')}</Text>
          <Pressable 
            style={styles.revealButton}
            onPress={onRevealAnswer}
          >
            <Eye size={18} color={theme.colors.text} style={styles.revealIcon} />
            <Text style={styles.revealButtonText}>{t('quiz.revealAnswer')}</Text>
          </Pressable>
        </View>
      )}
      
      {/* Explanation - only show if answer is correct or if wrong answer has been revealed */}
      {showAnswer && (selectedAnswer === question.correctAnswer || revealAnswer) && (
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>{t('quiz.explanation')}</Text>
          <Text style={styles.explanationText}>{explanation}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignSelf: 'center',
  },
  errorContainer: {
    width: width - 32,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: theme.colors.incorrect,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.lg,
  },
  categoryBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    zIndex: 10,
  },
  categoryText: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  option: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIndex: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  optionIndexText: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 16,
    color: theme.colors.text,
    flex: 1,
  },
  correctBadge: {
    backgroundColor: theme.colors.correct,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    marginLeft: theme.spacing.sm,
  },
  correctBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  explanationContainer: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
    flexShrink: 0,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  explanationText: {
    fontSize: 14,
    color: theme.colors.text,
    lineHeight: 20,
    flexWrap: 'wrap',
  },
  wrongAnswerContainer: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.incorrect,
    flexShrink: 0,
  },
  wrongAnswerText: {
    fontSize: 16,
    color: theme.colors.incorrect,
    marginBottom: theme.spacing.md,
    fontWeight: 'bold',
  },
  revealButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignSelf: 'center',
  },
  revealButtonText: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  revealIcon: {
    marginRight: theme.spacing.xs,
  },
});