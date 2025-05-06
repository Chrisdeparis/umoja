import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ActivityIndicator,
  Alert,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { AlertTriangle } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import { useResetStore } from '@/store/resetStore';
import { useLanguageStore } from '@/store/languageStore';

interface ResetAppButtonProps {
  variant?: 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  showIcon?: boolean;
  fullWidth?: boolean;
}

export default function ResetAppButton({
  variant = 'danger',
  size = 'medium',
  showIcon = true,
  fullWidth = false
}: ResetAppButtonProps) {
  const router = useRouter();
  const { resetApp, isResetting } = useResetStore();
  const { t } = useLanguageStore();
  const [localLoading, setLocalLoading] = useState(false);
  
  // Use either the global loading state or local loading state
  const loading = isResetting || localLoading;
  
  const handleReset = async () => {
    try {
      setLocalLoading(true);
      
      await resetApp();
      
      // Show success message
      if (Platform.OS === 'web') {
        alert(t('settings.resetSuccess'));
      } else {
        Alert.alert(
          t('settings.resetSuccessTitle'),
          t('settings.resetSuccess'),
          [{ text: 'OK' }]
        );
      }
      
      // Navigate to onboarding
      router.replace('/onboarding');
    } catch (error) {
      console.error('Error resetting app:', error);
      
      // Show error message
      if (Platform.OS === 'web') {
        alert(t('settings.resetError'));
      } else {
        Alert.alert(
          t('settings.resetErrorTitle'),
          t('settings.resetError'),
          [{ text: 'OK' }]
        );
      }
    } finally {
      setLocalLoading(false);
    }
  };
  
  // Determine button styles based on props
  const buttonStyles = [
    styles.button,
    variant === 'primary' ? styles.primaryButton : styles.dangerButton,
    size === 'small' ? styles.smallButton : 
    size === 'large' ? styles.largeButton : styles.mediumButton,
    fullWidth && styles.fullWidthButton,
    loading && styles.disabledButton
  ];
  
  // Determine text styles based on props
  const textStyles = [
    styles.buttonText,
    size === 'small' ? styles.smallText : 
    size === 'large' ? styles.largeText : styles.mediumText,
  ];
  
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={handleReset}
      disabled={loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? theme.colors.text : '#fff'} 
          size={size === 'small' ? 'small' : 'small'} 
        />
      ) : (
        <View style={styles.buttonContent}>
          {showIcon && (
            <AlertTriangle 
              size={size === 'small' ? 16 : size === 'large' ? 24 : 20} 
              color={variant === 'primary' ? theme.colors.text : '#fff'} 
              style={styles.icon} 
            />
          )}
          <Text style={textStyles}>{t('settings.resetApp')}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  dangerButton: {
    backgroundColor: theme.colors.incorrect,
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  mediumButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  largeButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  fullWidthButton: {
    width: '100%',
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
});