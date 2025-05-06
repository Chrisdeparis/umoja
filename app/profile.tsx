import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Platform, 
  Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { 
  ChevronRight, 
  Globe, 
  Award, 
  Trash2, 
  Crown, 
  ArrowLeft,
  BookOpen,
  Layers
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme, globalStyles } from '@/constants/theme';
import { useProfileStore } from '@/store/profileStore';
import { useLanguageStore } from '@/store/languageStore';
import { useSubscriptionStore } from '@/store/subscriptionStore';
import { useQuizStore } from '@/store/quizStore';
import LanguageSelector from '@/components/LanguageSelector';
import ResetAppButton from '@/components/ResetAppButton';
import * as Haptics from 'expo-haptics';

export default function ProfileScreen() {
  const router = useRouter();
  const { quizHistory, highScore, totalQuizzes, averageScore, clearHistory } = useProfileStore();
  const { t } = useLanguageStore();
  const { isPremium, freeQuizzesRemaining } = useSubscriptionStore();
  const { currentQuizSet, perfectScores, quizSets } = useQuizStore();
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  
  const handleBack = () => {
    router.back();
  };
  
  const handleStartQuiz = () => {
    router.push('/quiz');
  };
  
  const handleSubscription = () => {
    router.push('/subscription');
  };
  
  const handleClearHistory = () => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(typeof t('profile.clearHistoryConfirm') === 'string' 
        ? t('profile.clearHistoryConfirm') 
        : 'Are you sure you want to clear your history?');
      if (confirmed) {
        clearHistory();
      }
    } else {
      Alert.alert(
        typeof t('profile.clearHistory') === 'string' ? t('profile.clearHistory') : 'Clear History',
        typeof t('profile.clearHistoryConfirm') === 'string' ? t('profile.clearHistoryConfirm') : 'Are you sure you want to clear your history?',
        [
          { text: typeof t('profile.cancel') === 'string' ? t('profile.cancel') : 'Cancel', style: 'cancel' },
          { 
            text: typeof t('profile.clear') === 'string' ? t('profile.clear') : 'Clear', 
            style: 'destructive',
            onPress: () => {
              if (Platform.OS !== 'web') {
                try {
                  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
                } catch (error) {
                  console.log('Haptics not available');
                }
              }
              clearHistory();
            }
          }
        ]
      );
    }
  };
  
  const toggleLanguageSelector = () => {
    setShowLanguageSelector(!showLanguageSelector);
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeft size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{typeof t('profile.title') === 'string' ? t('profile.title') : 'Profile'}</Text>
        <View style={styles.headerRight} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={[theme.colors.primary + '40', 'transparent']}
          style={styles.gradientBackground}
        />
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{highScore}</Text>
            <Text style={styles.statLabel}>{typeof t('profile.bestScore') === 'string' ? t('profile.bestScore') : 'Best Score'}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{totalQuizzes}</Text>
            <Text style={styles.statLabel}>{typeof t('profile.completedQuizzes') === 'string' ? t('profile.completedQuizzes') : 'Completed Quizzes'}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{averageScore.toFixed(1)}</Text>
            <Text style={styles.statLabel}>{typeof t('profile.averageScore') === 'string' ? t('profile.averageScore') : 'Average Score'}</Text>
          </View>
        </View>
        
        <View style={styles.quizProgressContainer}>
          <Text style={styles.sectionTitle}>{typeof t('profile.currentQuizSet') === 'string' ? t('profile.currentQuizSet') : 'Current Quiz Set'}</Text>
          
          <View style={styles.quizSetInfo}>
            <View style={styles.quizSetNumber}>
              <Text style={styles.quizSetNumberText}>{currentQuizSet + 1}</Text>
            </View>
            <View style={styles.quizSetDetails}>
              <Text style={styles.quizSetDetailsText}>
                {typeof t('profile.completedSets') === 'string' ? t('profile.completedSets') : 'Completed Sets'}: {perfectScores.length}/{quizSets.length}
              </Text>
              <Text style={styles.quizSetDetailsText}>
                {typeof t('profile.perfectScores') === 'string' ? t('profile.perfectScores') : 'Perfect Scores'}: {perfectScores.length}
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{typeof t('profile.history') === 'string' ? t('profile.history') : 'History'}</Text>
            
            {quizHistory.length > 0 && (
              <TouchableOpacity 
                style={styles.clearButton} 
                onPress={handleClearHistory}
              >
                <Trash2 size={16} color={theme.colors.incorrect} />
                <Text style={styles.clearButtonText}>{typeof t('profile.clearHistory') === 'string' ? t('profile.clearHistory') : 'Clear History'}</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {quizHistory.length === 0 ? (
            <View style={styles.emptyHistory}>
              <BookOpen size={40} color={theme.colors.subtext} />
              <Text style={styles.emptyHistoryText}>{typeof t('profile.emptyHistory') === 'string' ? t('profile.emptyHistory') : 'No quiz history yet'}</Text>
              <TouchableOpacity 
                style={styles.startQuizButton}
                onPress={handleStartQuiz}
              >
                <Text style={styles.startQuizButtonText}>{typeof t('profile.startQuiz') === 'string' ? t('profile.startQuiz') : 'Start a Quiz'}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.historyList}>
              {quizHistory.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <View style={styles.historyItemLeft}>
                    <Text style={styles.historyDate}>{formatDate(item.date)}</Text>
                    <Text style={styles.historyScore}>
                      {typeof t('profile.score') === 'string' ? t('profile.score') : 'Score'} {item.score}/{item.total}
                    </Text>
                  </View>
                  
                  <View style={[
                    styles.scorePercentage,
                    item.score === item.total ? styles.perfectScore : 
                    item.score / item.total >= 0.7 ? styles.goodScore : 
                    styles.averageScore
                  ]}>
                    <Text style={styles.scorePercentageText}>
                      {Math.round((item.score / item.total) * 100)}%
                    </Text>
                    {item.score === item.total && (
                      <Award size={14} color={theme.colors.text} />
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{typeof t('profile.language') === 'string' ? t('profile.language') : 'Language'}</Text>
          
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={toggleLanguageSelector}
          >
            <View style={styles.settingItemLeft}>
              <Globe size={20} color={theme.colors.text} />
              <Text style={styles.settingItemText}>{typeof t('profile.changeLanguage') === 'string' ? t('profile.changeLanguage') : 'Change Language'}</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.subtext} />
          </TouchableOpacity>
          
          {showLanguageSelector && (
            <View style={styles.languageSelectorContainer}>
              <LanguageSelector onClose={toggleLanguageSelector} />
            </View>
          )}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{typeof t('profile.subscription') === 'string' ? t('profile.subscription') : 'Subscription'}</Text>
          
          <View style={styles.subscriptionInfo}>
            <View style={styles.subscriptionStatus}>
              <Text style={styles.subscriptionLabel}>{typeof t('profile.subscriptionStatus') === 'string' ? t('profile.subscriptionStatus') : 'Subscription Status'}</Text>
              <View style={[
                styles.subscriptionBadge,
                isPremium ? styles.premiumBadge : styles.freeBadge
              ]}>
                {isPremium ? (
                  <Crown size={14} color={theme.colors.text} />
                ) : null}
                <Text style={styles.subscriptionBadgeText}>
                  {isPremium 
                    ? (typeof t('profile.premium') === 'string' ? t('profile.premium') : 'Premium') 
                    : (typeof t('profile.free') === 'string' ? t('profile.free') : 'Free')}
                </Text>
              </View>
            </View>
            
            {!isPremium && (
              <Text style={styles.remainingQuizzes}>
                {typeof t('subscription.remainingQuizzes') === 'string' 
                  ? t('subscription.remainingQuizzes').replace('{count}', freeQuizzesRemaining.toString())
                  : `Remaining free quizzes: ${freeQuizzesRemaining}`}
              </Text>
            )}
            
            <TouchableOpacity 
              style={styles.manageSubscriptionButton}
              onPress={handleSubscription}
            >
              <Text style={styles.manageSubscriptionText}>
                {isPremium 
                  ? (typeof t('profile.manageSub') === 'string' ? t('profile.manageSub') : 'Manage Subscription')
                  : (typeof t('quiz.unlockPremium') === 'string' ? t('quiz.unlockPremium') : 'Unlock Premium')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{typeof t('profile.developerOptions') === 'string' ? t('profile.developerOptions') : 'Developer Options'}</Text>
          <Text style={styles.developerDescription}>{typeof t('profile.resetAppInfo') === 'string' ? t('profile.resetAppInfo') : 'Reset the app to its initial state. This will clear all data including quiz history and settings.'}</Text>
          
          <ResetAppButton />
        </View>
        
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            {typeof t('profile.quote') === 'string' ? t('profile.quote') : 'Education is the most powerful weapon which you can use to change the world.'}
          </Text>
          <Text style={styles.quoteAuthor}>{typeof t('profile.quoteAuthor') === 'string' ? t('profile.quoteAuthor') : 'Nelson Mandela'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  backButton: {
    padding: theme.spacing.sm,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xxl,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    opacity: 0.5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  statLabel: {
    fontSize: 14,
    color: theme.colors.subtext,
    marginTop: 4,
  },
  quizProgressContainer: {
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  quizSetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  quizSetNumber: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.lg,
  },
  quizSetNumberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  quizSetDetails: {
    flex: 1,
  },
  quizSetDetailsText: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 4,
  },
  section: {
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButtonText: {
    color: theme.colors.incorrect,
    marginLeft: 4,
    fontSize: 14,
  },
  emptyHistory: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xl,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  emptyHistoryText: {
    color: theme.colors.subtext,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  startQuizButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
  },
  startQuizButtonText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  historyList: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  historyItemLeft: {
    flex: 1,
  },
  historyDate: {
    fontSize: 14,
    color: theme.colors.subtext,
    marginBottom: 2,
  },
  historyScore: {
    fontSize: 16,
    color: theme.colors.text,
  },
  scorePercentage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    minWidth: 60,
    justifyContent: 'center',
    gap: 4,
  },
  perfectScore: {
    backgroundColor: theme.colors.primary,
  },
  goodScore: {
    backgroundColor: theme.colors.secondary,
  },
  averageScore: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scorePercentageText: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemText: {
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
    fontSize: 16,
  },
  languageSelectorContainer: {
    marginTop: theme.spacing.md,
  },
  subscriptionInfo: {
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  subscriptionStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  subscriptionLabel: {
    color: theme.colors.text,
    fontSize: 16,
  },
  subscriptionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    gap: 4,
  },
  premiumBadge: {
    backgroundColor: theme.colors.primary,
  },
  freeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  subscriptionBadgeText: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  remainingQuizzes: {
    color: theme.colors.subtext,
    marginBottom: theme.spacing.md,
  },
  manageSubscriptionButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
  },
  manageSubscriptionText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  developerDescription: {
    color: theme.colors.subtext,
    marginBottom: theme.spacing.md,
    fontSize: 14,
    lineHeight: 20,
  },
  quoteContainer: {
    marginHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.md,
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