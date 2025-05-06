import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { theme } from '@/constants/theme';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withSequence,
  withDelay,
  Easing
} from 'react-native-reanimated';

interface ScoreCircleProps {
  score: number;
  total: number;
}

export default function ScoreCircle({ score, total }: ScoreCircleProps) {
  const percentage = (score / total) * 100;
  const size = 200;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dashOffset = circumference - (circumference * percentage) / 100;
  
  const progress = useSharedValue(0);
  const scale = useSharedValue(0.8);
  
  useEffect(() => {
    progress.value = withDelay(
      300,
      withTiming(1, { duration: 1500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
    );
    
    scale.value = withSequence(
      withTiming(1.05, { duration: 300 }),
      withTiming(1, { duration: 200 })
    );
  }, []);
  
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      strokeDashoffset: withTiming(dashOffset, { duration: 1500 }),
    };
  });
  
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }],
    };
  });
  
  const getScoreColor = () => {
    if (percentage >= 80) return theme.colors.correct;
    if (percentage >= 50) return theme.colors.primary;
    return theme.colors.incorrect;
  };

  // Simplified version for mobile
  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <View style={styles.scoreTextContainer}>
        <Text style={styles.scoreText}>{score}</Text>
        <Text style={styles.totalText}>/{total}</Text>
      </View>
      
      <View style={styles.circleContainer}>
        <View style={styles.backgroundCircle} />
        <View 
          style={[
            styles.progressCircle, 
            { 
              borderColor: getScoreColor(),
              // Simple approximation for progress
              width: `${percentage}%`,
              height: `${percentage}%`,
            }
          ]} 
        />
      </View>
      
      <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundCircle: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    borderRadius: 100,
    borderWidth: 8,
    borderColor: theme.colors.border,
  },
  progressCircle: {
    position: 'absolute',
    borderRadius: 100,
    borderWidth: 15,
    backgroundColor: 'transparent',
  },
  scoreTextContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    zIndex: 10,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  totalText: {
    fontSize: 24,
    color: theme.colors.subtext,
    marginLeft: 4,
  },
  percentageText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
    color: theme.colors.subtext,
  },
});