import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Switch,
  Linking
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  Globe, 
  Bell, 
  Moon, 
  Volume2, 
  Info, 
  Shield, 
  FileText, 
  Mail,
  ChevronRight
} from 'lucide-react-native';
import { theme, globalStyles } from '@/constants/theme';
import { useLanguageStore } from '@/store/languageStore';
import LanguageSelector from '@/components/LanguageSelector';
import ResetAppButton from '@/components/ResetAppButton';

export default function SettingsScreen() {
  const { t } = useLanguageStore();
  
  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };
  
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.title}>{t('settings.title')}</Text>
      </View>
      
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
          <View style={styles.languageContainer}>
            <Globe size={24} color={theme.colors.primary} />
            <View style={styles.languageSelectorWrapper}>
              <LanguageSelector />
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.title')}</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Bell size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.notifications')}</Text>
            </View>
            <Switch
              trackColor={{ false: theme.colors.border, true: theme.colors.primary + '80' }}
              thumbColor={true ? theme.colors.primary : theme.colors.subtext}
              value={true}
              onValueChange={() => {}}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Moon size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.darkMode')}</Text>
            </View>
            <Switch
              trackColor={{ false: theme.colors.border, true: theme.colors.primary + '80' }}
              thumbColor={true ? theme.colors.primary : theme.colors.subtext}
              value={true}
              onValueChange={() => {}}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Volume2 size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.sound')}</Text>
            </View>
            <Switch
              trackColor={{ false: theme.colors.border, true: theme.colors.primary + '80' }}
              thumbColor={true ? theme.colors.primary : theme.colors.subtext}
              value={true}
              onValueChange={() => {}}
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.about')}</Text>
          
          <TouchableOpacity 
            style={styles.linkItem}
            onPress={() => handleOpenLink('https://example.com/about')}
          >
            <View style={styles.settingLeft}>
              <Info size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.about')}</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.subtext} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkItem}
            onPress={() => handleOpenLink('https://example.com/privacy')}
          >
            <View style={styles.settingLeft}>
              <Shield size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.privacyPolicy')}</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.subtext} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkItem}
            onPress={() => handleOpenLink('https://example.com/terms')}
          >
            <View style={styles.settingLeft}>
              <FileText size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.termsOfService')}</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.subtext} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkItem}
            onPress={() => handleOpenLink('mailto:support@example.com')}
          >
            <View style={styles.settingLeft}>
              <Mail size={24} color={theme.colors.primary} />
              <Text style={styles.settingText}>{t('settings.contactUs')}</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.subtext} />
          </TouchableOpacity>
          
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>{t('settings.version')} 1.0.0</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <ResetAppButton />
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 African History Quiz</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
  },
  languageSelectorWrapper: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },
  versionText: {
    fontSize: 14,
    color: theme.colors.subtext,
  },
  footer: {
    alignItems: 'center',
    marginVertical: theme.spacing.xl,
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.subtext,
  },
});