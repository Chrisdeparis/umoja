import React, { useRef, useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Dimensions, 
  FlatList, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { theme, globalStyles } from '@/constants/theme';
import { useOnboardingStore } from '@/store/onboardingStore';
import { useLanguageStore } from '@/store/languageStore';
import * as Haptics from 'expo-haptics';
import { ChevronRight, ChevronLeft, BookOpen, Award, BarChart3 } from 'lucide-react-native';
import LanguageSelector from '@/components/LanguageSelector';

const { width } = Dimensions.get('window');

// Define interface for onboarding slide items
interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export default function OnboardingScreen() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { hasCompletedOnboarding, completeOnboarding } = useOnboardingStore();
  const { t } = useLanguageStore();
  
  // Onboarding data with better images and icons
  const onboardingData: OnboardingSlide[] = [
    {
      id: '1',
      title: t('onboarding.slide1.title'),
      description: t('onboarding.slide1.description'),
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1000',
      icon: <BookOpen size={48} color={theme.colors.primary} />
    },
    {
      id: '2',
      title: t('onboarding.slide2.title'),
      description: t('onboarding.slide2.description'),
      image: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1000',
      icon: <Award size={48} color={theme.colors.primary} />
    },
    {
      id: '3',
      title: t('onboarding.slide3.title'),
      description: t('onboarding.slide3.description'),
      image: 'https://images.unsplash.com/photo-1605647533135-51b5206c4e37?q=80&w=1000',
      icon: <BarChart3 size={48} color={theme.colors.primary} />
    }
  ];
  
  useEffect(() => {
    // Check if user has already completed onboarding
    if (hasCompletedOnboarding) {
      router.replace('/');
    }
  }, [hasCompletedOnboarding]);
  
  const handleNext = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      handleGetStarted();
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true
      });
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleGetStarted = () => {
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    completeOnboarding();
    router.replace('/');
  };
  
  const handleSkip = () => {
    completeOnboarding();
    router.replace('/');
  };
  
  const renderItem = ({ item }: { item: OnboardingSlide }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          contentFit="cover"
          transition={500}
        />
        <LinearGradient
          colors={['transparent', theme.colors.background]}
          style={styles.imageOverlay}
        />
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            {item.icon}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? theme.colors.primary : theme.colors.border }
            ]}
          />
        ))}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <View style={styles.container}>
        <View style={styles.headerButtons}>
          <LanguageSelector isCompact={true} />
          <TouchableOpacity 
            style={styles.skipButton} 
            onPress={handleSkip}
          >
            <Text style={styles.skipText}>{t('onboarding.skip')}</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
        />
        
        {renderDots()}
        
        <View style={styles.buttonsContainer}>
          {currentIndex > 0 && (
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={handlePrevious}
            >
              <ChevronLeft size={24} color={theme.colors.text} />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={[styles.button, styles.nextButton]} 
            onPress={handleNext}
          >
            <Text style={styles.buttonText}>
              {currentIndex === onboardingData.length - 1 ? t('onboarding.getStarted') : t('onboarding.next')}
            </Text>
            {currentIndex < onboardingData.length - 1 && (
              <ChevronRight size={20} color={theme.colors.text} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButtons: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    zIndex: 10,
  },
  skipButton: {
    padding: theme.spacing.sm,
  },
  skipText: {
    color: theme.colors.subtext,
    fontSize: 16,
  },
  slide: {
    width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    top: 0,
  },
  imageOverlay: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: '20%',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 150,
    paddingHorizontal: theme.spacing.xl,
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  textContainer: {
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: theme.colors.subtext,
    textAlign: 'center',
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing.xl,
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  button: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  nextButton: {
    maxWidth: 200,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: theme.spacing.xs,
  },
});