import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Modal, 
  FlatList,
  Platform
} from 'react-native';
import { Globe } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import { useLanguageStore } from '@/store/languageStore';
import { supportedLanguages } from '@/constants/languages';
import * as Haptics from 'expo-haptics';

export interface LanguageSelectorProps {
  isCompact?: boolean;
  onClose?: () => void;
}

export default function LanguageSelector({ isCompact = false, onClose }: LanguageSelectorProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguageStore();
  
  const handleOpenModal = () => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (error) {
        console.log('Haptics not available');
      }
    }
    setModalVisible(true);
  };
  
  const handleSelectLanguage = (languageCode: string) => {
    if (Platform.OS !== 'web') {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      } catch (error) {
        console.log('Haptics not available');
      }
    }
    changeLanguage(languageCode);
    setModalVisible(false);
    
    // Call the onClose callback if provided
    if (onClose) {
      onClose();
    }
  };
  
  const currentLanguageObj = supportedLanguages.find(lang => lang.code === currentLanguage);
  
  return (
    <>
      <TouchableOpacity 
        style={[styles.languageButton, isCompact && styles.compactButton]} 
        onPress={handleOpenModal}
      >
        <Globe size={isCompact ? 18 : 20} color={theme.colors.text} />
        {!isCompact && (
          <>
            <Text style={styles.languageButtonText}>
              {currentLanguageObj?.flag} {currentLanguageObj?.nativeName}
            </Text>
          </>
        )}
      </TouchableOpacity>
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
            <Text style={styles.modalTitle}>
              {typeof t('profile.changeLanguage') === 'string' 
                ? t('profile.changeLanguage') 
                : 'Change Language'}
            </Text>
            
            <FlatList
              data={supportedLanguages}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={[
                    styles.languageItem,
                    currentLanguage === item.code && styles.selectedLanguage
                  ]}
                  onPress={() => handleSelectLanguage(item.code)}
                >
                  <Text style={styles.languageFlag}>{item.flag}</Text>
                  <View style={styles.languageInfo}>
                    <Text style={styles.languageName}>{item.nativeName}</Text>
                    <Text style={styles.languageNameEnglish}>{item.name}</Text>
                  </View>
                  {currentLanguage === item.code && (
                    <View style={styles.checkmark} />
                  )}
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.languageList}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  compactButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  languageButtonText: {
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxWidth: 350,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  languageList: {
    paddingBottom: theme.spacing.md,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  selectedLanguage: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  languageFlag: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  languageNameEnglish: {
    fontSize: 12,
    color: theme.colors.subtext,
    marginTop: 2,
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
  },
});