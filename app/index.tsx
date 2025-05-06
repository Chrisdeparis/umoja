import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BookOpen, Award, User, Info, ArrowRight } from 'lucide-react-native';
import { theme, globalStyles } from '@/constants/theme';
import { useQuizStore } from '@/store/quizStore';
import { useProfileStore } from '@/store/profileStore';
import { useLanguageStore } from '@/store/languageStore';
import { useSubscriptionStore } from '@/store/subscriptionStore';

const { width } = Dimensions.get('window');

const CATEGORY_IMAGES = {
  empires: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000',
  leaders: 'https://images.unsplash.com/photo-1580867532901-7e3707f178ce?q=80&w=1000',
  resistance: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=1000',
  culture: 'https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=1000',
  religion: 'https://images.unsplash.com/photo-1566956580800-c8c4b4605099?q=80&w=1000',
  diaspora: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1000',
};

export default function HomeScreen() {
  const router = useRouter();
  const { initializeQuiz, currentQuizSet, perfectScores } = useQuizStore();
  const { quizHistory, totalQuizzes, averageScore } = useProfileStore();
  const { t } = useLanguageStore();
  const { freeQuizzesRemaining, isPremium } = useSubscriptionStore();
  
  const completedSets = perfectScores.length;
  
  // Get the most recent quiz result
  const latestQuiz = quizHistory.length > 0 ? quizHistory[0] : null;
  
  const handleStartQuiz = () => {
    initializeQuiz();
    router.push('/quiz');
  };
  
  const handleViewProfile = () => {
    router.push('/profile');
  };
  
  const handleAbout = () => {
    // Not implemented yet
    console.log('About button pressed');
  };
  
  const handleSubscription = () => {
    router.push('/subscription');
  };
  
  const renderCategories = () => {
    const categories = ['empires', 'leaders', 'resistance', 'culture', 'religion', 'diaspora'];
    
    return (
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Featured Topics</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScrollContent}
        >
          {categories.map((category) => (
            <TouchableOpacity 
              key={category}
              style={styles.categoryCard}
              onPress={handleStartQuiz}
            >
              <Image 
                source={{ uri: CATEGORY_IMAGES[category as keyof typeof CATEGORY_IMAGES] }}
                style={styles.categoryImage}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.categoryGradient}
              />
              <Text style={styles.categoryText}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Umoja</Text>
            <Text style={styles.subtitle}>African History Quiz</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.profileButton}
            onPress={handleViewProfile}
          >
            <User size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.heroContainer}>
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradient}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Test Your Knowledge</Text>
            <Text style={styles.heroSubtitle}>Discover the rich history of Africa</Text>
            
            <TouchableOpacity 
              style={styles.startButton}
              onPress={handleStartQuiz}
            >
              <Text style={styles.startButtonText}>Start Quiz</Text>
              <ArrowRight size={20} color={theme.colors.text} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <BookOpen size={24} color={theme.colors.primary} />
            <Text style={styles.statValue}>{totalQuizzes}</Text>
            <Text style={styles.statLabel}>Quizzes Taken</Text>
          </View>
          
          <View style={styles.statCard}>
            <Award size={24} color={theme.colors.primary} />
            <Text style={styles.statValue}>{averageScore.toFixed(1)}</Text>
            <Text style={styles.statLabel}>Average Score</Text>
          </View>
          
          <View style={styles.statCard}>
            <BookOpen size={24} color={theme.colors.primary} />
            <Text style={styles.statValue}>{completedSets}</Text>
            <Text style={styles.statLabel}>Completed Sets</Text>
          </View>
        </View>
        
        {!isPremium && (
          <TouchableOpacity 
            style={styles.premiumBanner}
            onPress={handleSubscription}
          >
            <View style={styles.premiumContent}>
              <Text style={styles.premiumTitle}>Upgrade to Premium</Text>
              <Text style={styles.premiumSubtitle}>
                {`${freeQuizzesRemaining} free quizzes remaining`}
              </Text>
            </View>
            <ArrowRight size={24} color={theme.colors.text} />
          </TouchableOpacity>
        )}
        
        {renderCategories()}
        
        {latestQuiz && (
          <View style={styles.recentQuizContainer}>
            <Text style={styles.sectionTitle}>Recent Quiz</Text>
            <View style={styles.recentQuizCard}>
              <View style={styles.recentQuizHeader}>
                <Text style={styles.recentQuizTitle}>Quiz Set {latestQuiz.quizSet}</Text>
                <Text style={styles.recentQuizDate}>
                  {new Date(latestQuiz.date).toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.recentQuizScore}>
                <Text style={styles.recentQuizScoreText}>
                  {latestQuiz.score}/{latestQuiz.total}
                </Text>
                <Text style={styles.recentQuizScoreLabel}>Score</Text>
              </View>
              <TouchableOpacity 
                style={styles.recentQuizButton}
                onPress={handleStartQuiz}
              >
                <Text style={styles.recentQuizButtonText}>Try Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.footerButton}
            onPress={handleAbout}
          >
            <Info size={16} color={theme.colors.subtext} />
            <Text style={styles.footerButtonText}>About</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.subtext,
    marginTop: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer: {
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    height: 200,
  },
  heroGradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  heroContent: {
    padding: theme.spacing.lg,
    justifyContent: 'center',
    height: '100%',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  heroSubtitle: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
    opacity: 0.9,
  },
  startButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: theme.spacing.sm,
  },
  startButtonText: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.subtext,
    textAlign: 'center',
  },
  premiumBanner: {
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  premiumContent: {
    flex: 1,
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  premiumSubtitle: {
    fontSize: 14,
    color: theme.colors.subtext,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  categoriesContainer: {
    marginBottom: theme.spacing.xl,
  },
  categoriesScrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
  },
  categoryCard: {
    width: 160,
    height: 120,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.md,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  categoryGradient: {
    ...StyleSheet.absoluteFillObject,
    height: '50%',
    top: '50%',
  },
  categoryText: {
    color: theme.colors.text,
    fontWeight: 'bold',
    padding: theme.spacing.md,
  },
  recentQuizContainer: {
    marginBottom: theme.spacing.xl,
  },
  recentQuizCard: {
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
  },
  recentQuizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  recentQuizTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  recentQuizDate: {
    fontSize: 14,
    color: theme.colors.subtext,
  },
  recentQuizScore: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  recentQuizScoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  recentQuizScoreLabel: {
    fontSize: 14,
    color: theme.colors.subtext,
  },
  recentQuizButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
  },
  recentQuizButtonText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  footerButtonText: {
    fontSize: 14,
    color: theme.colors.subtext,
  },
});