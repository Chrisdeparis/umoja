import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Alert, 
  Platform,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { ArrowLeft, Check, X, Crown, Lock } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme, globalStyles } from '@/constants/theme';
import { useSubscriptionStore } from '@/store/subscriptionStore';
import { useLanguageStore } from '@/store/languageStore';
import * as Haptics from 'expo-haptics';

export default function SubscriptionScreen() {
  const router = useRouter();
  const { 
    isPremium, 
    freeQuizzesRemaining, 
    subscribeToPremium, 
    restorePurchase 
  } = useSubscriptionStore();
  const { t, currentLanguage } = useLanguageStore();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleBack = () => {
    router.back();
  };
  
  const handleSubscribe = () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(err => {
          console.log('Haptics error:', err);
        });
      } catch (error) {
        console.log('Haptics not available:', error);
      }
    }
    
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      subscribeToPremium(1); // Subscribe for 1 month
      setIsLoading(false);
      
      const successMessage = t('subscription.subscribeSuccess');
      const enjoyMessage = t('subscription.enjoyPremium');
      
      if (Platform.OS === 'web') {
        alert(successMessage);
      } else {
        Alert.alert(
          successMessage,
          enjoyMessage,
          [{ text: 'OK', onPress: () => router.back() }]
        );
      }
    }, 2000);
  };
  
  const handleRestore = async () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(err => {
          console.log('Haptics error:', err);
        });
      } catch (error) {
        console.log('Haptics not available:', error);
      }
    }
    
    setIsLoading(true);
    
    try {
      const success = await restorePurchase();
      
      if (success) {
        const successMessage = t('subscription.restoreSuccess');
        const enjoyMessage = t('subscription.enjoyPremium');
        
        if (Platform.OS === 'web') {
          alert(successMessage);
        } else {
          Alert.alert(
            successMessage,
            enjoyMessage,
            [{ text: 'OK', onPress: () => router.back() }]
          );
        }
      } else {
        const failMessage = t('subscription.restoreFailed');
        const tryAgainMessage = t('subscription.tryAgain');
        
        if (Platform.OS === 'web') {
          alert(failMessage);
        } else {
          Alert.alert(
            failMessage,
            tryAgainMessage
          );
        }
      }
    } catch (error) {
      console.error('Restore error:', error);
      
      const errorMessage = t('subscription.restoreError');
      const tryAgainMessage = t('subscription.tryAgain');
      
      if (Platform.OS === 'web') {
        alert(errorMessage);
      } else {
        Alert.alert(
          errorMessage,
          tryAgainMessage
        );
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Define fallback features in case translations are missing
  const freeFeatures = [
    "Limited quizzes (3 sets)",
    "Basic topics",
    "Track progress"
  ];
  
  const premiumFeatures = [
    "Unlimited quizzes",
    "All topics including religion & spirituality",
    "No ads",
    "Offline access"
  ];
  
  // Get features from translations or use fallbacks
  const getFreeFeatures = () => {
    try {
      const features = t('subscription.freeFeatures');
      return Array.isArray(features) ? features : freeFeatures;
    } catch (error) {
      return freeFeatures;
    }
  };
  
  const getPremiumFeatures = () => {
    try {
      const features = t('subscription.premiumFeatures');
      return Array.isArray(features) ? features : premiumFeatures;
    } catch (error) {
      return premiumFeatures;
    }
  };
  
  const renderFeatureItem = (text: string, isIncluded: boolean) => (
    <View style={styles.featureItem} key={text}>
      {isIncluded ? (
        <Check size={18} color={theme.colors.correct} />
      ) : (
        <X size={18} color={theme.colors.incorrect} />
      )}
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {t('subscription.title')}
        </Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={[theme.colors.primary + '40', 'transparent']}
          style={styles.gradientBackground}
        />
        
        <View style={styles.container}>
          <View style={styles.crownContainer}>
            <Crown size={60} color={theme.colors.primary} />
          </View>
          
          <Text style={styles.title}>
            {t('subscription.title')}
          </Text>
          <Text style={styles.description}>
            {t('subscription.description')}
          </Text>
          
          <Text style={styles.remainingQuizzes}>
            {t('subscription.remainingQuizzes', { count: freeQuizzesRemaining })}
          </Text>
          
          <View style={styles.premiumFeatureHighlight}>
            <Lock size={20} color={theme.colors.primary} />
            <Text style={styles.premiumFeatureText}>
              {t('subscription.sensitiveTopics')}
            </Text>
          </View>
          
          <View style={styles.plansContainer}>
            {/* Free Plan */}
            <View style={[styles.planCard, styles.freePlan]}>
              <View style={styles.planHeader}>
                <Text style={styles.planTitle}>
                  {t('subscription.freeTitle')}
                </Text>
                <Text style={styles.planPrice}>€0</Text>
              </View>
              
              <View style={styles.featuresContainer}>
                {getFreeFeatures().map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Check size={18} color={theme.colors.text} />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
                <View style={styles.featureItem}>
                  <X size={18} color={theme.colors.incorrect} />
                  <Text style={styles.featureText}>
                    {t('subscription.noSensitiveTopics')}
                  </Text>
                </View>
              </View>
              
              {isPremium ? (
                <View style={[styles.currentPlanBadge, styles.disabledBadge]}>
                  <Text style={styles.currentPlanText}>
                    {t('subscription.current')}
                  </Text>
                </View>
              ) : (
                <View style={styles.currentPlanBadge}>
                  <Text style={styles.currentPlanText}>
                    {t('subscription.current')}
                  </Text>
                </View>
              )}
            </View>
            
            {/* Premium Plan */}
            <View style={[styles.planCard, styles.premiumPlan]}>
              <View style={styles.planHeader}>
                <Text style={[styles.planTitle, styles.premiumTitle]}>
                  {t('subscription.premiumTitle')}
                </Text>
                <Text style={[styles.planPrice, styles.premiumPrice]}>
                  {t('subscription.premiumPrice')}
                </Text>
              </View>
              
              <View style={styles.featuresContainer}>
                {getPremiumFeatures().map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Check size={18} color={theme.colors.primary} />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
                <View style={styles.featureItem}>
                  <Check size={18} color={theme.colors.primary} />
                  <Text style={styles.featureText}>
                    {t('subscription.allTopics')}
                  </Text>
                </View>
              </View>
              
              {isPremium ? (
                <View style={styles.currentPlanBadge}>
                  <Text style={styles.currentPlanText}>
                    {t('subscription.current')}
                  </Text>
                </View>
              ) : (
                <TouchableOpacity 
                  style={styles.subscribeButton}
                  onPress={handleSubscribe}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={theme.colors.text} />
                  ) : (
                    <Text style={styles.subscribeButtonText}>
                      {t('subscription.subscribe')}
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </View>
          
          {!isPremium && (
            <TouchableOpacity 
              style={styles.restoreButton}
              onPress={handleRestore}
              disabled={isLoading}
            >
              <Text style={styles.restoreButtonText}>
                {t('subscription.restore')}
              </Text>
            </TouchableOpacity>
          )}
          
          <Text style={styles.termsText}>
            {t('subscription.termsInfo')}
          </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  placeholder: {
    width: 40,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing.xl,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    opacity: 0.5,
  },
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  crownContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: theme.colors.subtext,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    maxWidth: 300,
  },
  remainingQuizzes: {
    fontSize: 16,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    fontWeight: 'bold',
  },
  premiumFeatureHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    maxWidth: 350,
  },
  premiumFeatureText: {
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
    fontSize: 14,
  },
  plansContainer: {
    width: '100%',
    maxWidth: 500,
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  planCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    flex: Platform.OS === 'web' ? 1 : undefined,
    width: Platform.OS === 'web' ? '48%' : '100%',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  freePlan: {
    opacity: 0.8,
  },
  premiumPlan: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  planHeader: {
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  premiumTitle: {
    color: theme.colors.primary,
  },
  planPrice: {
    fontSize: 24,
    color: theme.colors.text,
  },
  premiumPrice: {
    color: theme.colors.primary,
  },
  featuresContainer: {
    marginBottom: theme.spacing.lg,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  featureText: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
  },
  subscribeButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscribeButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentPlanBadge: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
  },
  disabledBadge: {
    backgroundColor: theme.colors.border,
  },
  currentPlanText: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  restoreButton: {
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  restoreButtonText: {
    color: theme.colors.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  termsText: {
    fontSize: 12,
    color: theme.colors.subtext,
    textAlign: 'center',
    maxWidth: 300,
  },
});