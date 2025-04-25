// src/constants/GlobalStyles.js

import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#5A31F4', // Violet chill principal
  secondary: '#FFD700', // Jaune doré
  background: '#FFFFFF',
  textPrimary: '#333333',
  textSecondary: '#666666',
  success: '#4CAF50',
  error: '#F44336',
};

export const Fonts = {
  Monument: 'PP Monument Extended', // Unique font family pour toutes les variantes
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontFamily: Fonts.Monument,
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontFamily: Fonts.Monument,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 24,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  bodyText: {
    fontFamily: Fonts.Monument,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    fontFamily: Fonts.Monument,
    fontSize: 18,
    color: Colors.background,
    fontWeight: 'bold',
  },
});
