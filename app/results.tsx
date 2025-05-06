import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform, Alert, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Home, RotateCcw, User, ArrowRight, Award, Share2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme, globalStyles } from '@/constants/theme';
import { useQuizStore } from '@/store/quizStore';
import { useProfileStore } from '@/store/profileStore';
import { useLanguageStore } from '@/store/languageStore';
import { useSubscriptionStore } from '@/store/subscriptionStore';
import ScoreCircle from '@/components/ScoreCircle';
import * as Haptics from 'expo-haptics';

export default function ResultsScreen() {
  const router = useRouter();
  const { 
    score, 
    currentSetQuestions, 
    resetQuiz, 
    advanceToNextSet,
    currentQuizSet,
    completeQuiz
  } = useQuizStore();
  const { addQuizResult } = useProfileStore();
  const { t } = useLanguageStore();
  const { useQuiz, freeQuizzesRemaining, isPremium } = useSubscriptionStore();
  
  const isPerfect = score === currentSetQuestions.length;
  
  useEffect(() => {
    // Save quiz result to profile history
    addQuizResult(score, currentSetQuestions.length, currentQuizSet);
    
    // Track completed quiz for subscription logic
    useQuiz();
    
    if (Platform.OS !== 'web') {
      try {
        Haptics.notificationAsync(
          isPerfect
            ? Haptics.NotificationFeedbackType.Success
            : score > currentSetQuestions.length / 2
              ? Haptics.NotificationFeedbackType.Warning
              : Haptics.NotificationFeedbackType.Error
        ).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    }
  }, []);
  
  const getScoreMessage = () => {
    if (isPerfect) {
      return t('results.perfectScore');
    }
    
    const percentage = (score / currentSetQuestions.length) * 100;
    
    if (percentage >= 80) {
      return t('results.excellentScore');
    } else if (percentage >= 60) {
      return t('results.goodScore');
    } else if (percentage >= 40) {
      return t('results.averageScore');
    } else {
      return t('results.lowScore');
    }
  };
  
  const handleRetry = () => {
    resetQuiz();
    router.push('/quiz');
  };
  
  const handleNextSet = () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    }
    
    advanceToNextSet();
    router.push('/quiz');
  };
  
  const handleHome = () => {
    router.push('/');
  };
  
  const handleProfile = () => {
    router.push('/profile');
  };
  
  const handleSubscription = () => {
    router.push('/subscription');
  };
  
  // Handle share functionality
  const handleShareResults = async () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    } else {
      Alert.alert(t('results.shareTitle'), t('results.shareNotAvailableOnWeb'));
      return;
    }

    try {
      const message = isPerfect 
        ? t('results.sharePerfectMessage', { score, total: currentSetQuestions.length })
        : t('results.shareMessage', { score, total: currentSetQuestions.length });
      
      await Share.share({
        message,
        title: t('results.shareTitle'),
      });
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert(t('results.shareTitle'), String(error));
    }
  };
  
  const handleShareApp = async () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      } catch (error) {
        console.log('Haptics not available');
      }
    } else {
      Alert.alert(t('results.shareTitle'), t('results.shareNotAvailableOnWeb'));
      return;
    }

    try {
      await Share.share({
        message: t('results.shareAppMessage'),
        title: t('results.shareAppTitle'),
      });
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert(t('results.shareTitle'), String(error));
    }
  };
  
  // Check if we should show premium message
  const shouldShowPremiumMessage = () => {
    return !isPremium && freeQuizzesRemaining <= 1;
  };
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={[theme.colors.primary + '40', 'transparent']}
          style={styles.gradientBackground}
        />
        
        <View style={styles.container}>
          <Text style={styles.title}>{t('results.title')}</Text>
          
          <View style={styles.quizSetIndicator}>
            <Text style={styles.quizSetText}>
              {t('results.quizSet', { number: currentQuizSet + 1 })}
            </Text>
          </View>
          
          <ScoreCircle score={score} total={currentSetQuestions.length} />
          
          <Text style={styles.message}>{getScoreMessage()}</Text>
          
          {isPerfect ? (
            <View style={styles.perfectScoreBanner}>
              <Award size={24} color={theme.colors.primary} />
              <Text style={styles.perfectScoreText}>{t('results.perfectScoreMessage')}</Text>
            </View>
          ) : (
            <View style={styles.retryBanner}>
              <Text style={styles.retryText}>{t('results.retryMessage')}</Text>
            </View>
          )}
          
          {shouldShowPremiumMessage() && (
            <TouchableOpacity 
              style={styles.premiumBanner}
              onPress={handleSubscription}
            >
              <Text style={styles.premiumText}>{t('subscription.unlockMessage')}</Text>
              <Text style={styles.premiumSubtext}>{t('subscription.unlockBenefit')}</Text>
            </TouchableOpacity>
          )}
          
          <View style={styles.buttonsContainer}>
            {/* Share buttons */}
            <View style={styles.shareButtonsContainer}>
              <TouchableOpacity 
                style={[
                  styles.shareButton, 
                  isPerfect ? styles.perfectShareButton : null
                ]} 
                onPress={handleShareResults}
              >
                {isPerfect ? (
                  <Award size={20} color={theme.colors.text} />
                ) : (
                  <Share2 size={20} color={theme.colors.text} />
                )}
                <Text style={styles.buttonText}>{t('results.shareScore')}</Text>
              </TouchableOpacity>
              
              {Platform.OS !== 'web' && (
                <TouchableOpacity 
                  style={styles.appShareButton} 
                  onPress={handleShareApp}
                >
                  <Share2 size={20} color={theme.colors.text} />
                  <Text style={styles.buttonText}>{t('results.shareApp')}</Text>
                </TouchableOpacity>
              )}
            </View>
            
            <View style={styles.navigationButtons}>
              {isPerfect ? (
                <TouchableOpacity 
                  style={[styles.button, styles.nextSetButton]} 
                  onPress={handleNextSet}
                >
                  <Text style={styles.buttonText}>{t('results.nextSet')}</Text>
                  <ArrowRight size={20} color={theme.colors.text} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button} onPress={handleRetry}>
                  <RotateCcw size={20} color={theme.colors.text} />
                  <Text style={styles.buttonText}>{t('results.retry')}</Text>
                </TouchableOpacity>
              )}
              
              <TouchableOpacity 
                style={[styles.button, styles.homeButton]} 
                onPress={handleHome}
              >
                <Home size={20} color={theme.colors.text} />
                <Text style={styles.buttonText}>{t('results.home')}</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              style={[styles.button, styles.profileButton]} 
              onPress={handleProfile}
            >
              <User size={20} color={theme.colors.text} />
              <Text style={styles.buttonText}>{t('results.viewProfile')}</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>
              {t('results.quote')}
            </Text>
            <Text style={styles.quoteAuthor}>{t('results.quoteAuthor')}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    opacity: 0.5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  quizSetIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    borderRadius: 999, // Use a large number instead of 'full'
    marginBottom: theme.spacing.lg,
  },
  quizSetText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    marginVertical: theme.spacing.lg,
    maxWidth: 300,
  },
  perfectScoreBanner: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.md,
  },
  perfectScoreText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  retryBanner: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    width: '100%',
    maxWidth: 350,
  },
  retryText: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: 'center',
  },
  premiumBanner: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  premiumText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
  },
  premiumSubtext: {
    color: theme.colors.text,
    fontSize: 14,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 300,
    gap: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },
  shareButtonsContainer: {
    width: '100%',
    gap: theme.spacing.sm,
  },
  shareButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
    width: '100%',
  },
  perfectShareButton: {
    backgroundColor: theme.colors.secondary,
  },
  appShareButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
    width: '100%',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  button: {
    flex: 1,
    backgroundColor: theme.colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
  },
  homeButton: {
    backgroundColor: theme.colors.secondary,
  },
  nextSetButton: {
    backgroundColor: theme.colors.primary,
  },
  profileButton: {
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  quoteContainer: {
    marginTop: theme.spacing.xxl,
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    maxWidth: 350,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  quoteText: {
    fontSize: 16,
    color: theme.colors.text,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 14,
    color: theme.colors.primary,
    marginTop: theme.spacing.md,
    textAlign: 'right',
  },
});