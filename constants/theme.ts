import { StyleSheet } from 'react-native';
import Colors from './colors';

export const theme = {
  colors: Colors.dark,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
    full: 999, // Added for circular/pill shapes
  }
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.lg,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});