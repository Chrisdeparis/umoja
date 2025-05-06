import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Share, Platform, View } from 'react-native';
import { Share as ShareIcon, Award, ExternalLink } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import { useLanguageStore } from '@/store/languageStore';
import * as Haptics from 'expo-haptics';

interface ShareButtonProps {
  score: number;
  total: number;
  isPerfect?: boolean;
  variant?: 'results' | 'app';
}

export default function ShareButton({ score, total, isPerfect = false, variant = 'results' }: ShareButtonProps) {
  const { t } = useLanguageStore();
  
  const handleShare = async () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (error) {
        console.log('Haptics not available');
      }
    }

    try {
      let message = '';
      let title = '';
      
      if (variant === 'results') {
        message = isPerfect 
          ? t('results.sharePerfectMessage', { score, total })
          : t('results.shareMessage', { score, total });
        title = t('results.shareTitle');
      } else {
        message = t('results.shareAppMessage');
        title = t('results.shareAppTitle');
      }
      
      const result = await Share.share({
        message,
        title,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (Platform.OS === 'web') {
    return null; // Share API not fully supported on web
  }

  if (variant === 'app') {
    return (
      <TouchableOpacity style={styles.appButton} onPress={handleShare}>
        <ExternalLink size={20} color={theme.colors.text} />
        <Text style={styles.buttonText}>{t('results.shareApp')}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isPerfect ? styles.perfectButton : null
      ]} 
      onPress={handleShare}
    >
      {isPerfect ? (
        <Award size={20} color={theme.colors.text} />
      ) : (
        <ShareIcon size={20} color={theme.colors.text} />
      )}
      <Text style={styles.buttonText}>{t('results.shareScore')}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
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
  perfectButton: {
    backgroundColor: theme.colors.secondary,
  },
  appButton: {
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
    marginTop: theme.spacing.md,
    width: '100%',
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});