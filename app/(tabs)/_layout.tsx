import React from 'react';
import { Tabs } from 'expo-router';
import { Home, User, Settings } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import { useLanguageStore } from '@/store/languageStore';

export default function TabLayout() {
  const { t } = useLanguageStore();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.subtext,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}