import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "@/constants/theme";

import { ErrorBoundary } from "./error-boundary";

export const unstable_settings = {
  initialRouteName: "onboarding",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <StatusBar style="light" />
      <RootLayoutNav />
    </ErrorBoundary>
  );
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen 
        name="quiz" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_right',
        }} 
      />
      <Stack.Screen 
        name="results" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_right',
        }} 
      />
      <Stack.Screen 
        name="profile" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_bottom',
        }} 
      />
      <Stack.Screen 
        name="subscription" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_bottom',
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          headerShown: false,
          animation: 'slide_from_bottom',
        }} 
      />
    </Stack>
  );
}