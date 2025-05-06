import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '@/constants/theme';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = current / total;
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${withTiming(progress * 100, { duration: 300 })}%`,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progress, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    backgroundColor: theme.colors.border,
    borderRadius: 2,
    overflow: 'hidden',
    width: '100%',
  },
  progress: {
    height: '100%',
    backgroundColor: theme.colors.primary,
  },
});