// src/constants/GlobalStyles.js

import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#540CCC', // Nouveau violet chill principal
  secondary: '#FFFF4F', // Nouveau jaune éclatant
  backgroundStart: '#A0C5E8', // Dégradé start
  backgroundEnd: '#FAEAB0', // Dégradé end
  textPrimary: '#333333',
  textSecondary: '#666666',
  success: '#4CAF50',
  error: '#F44336',
};

export const Fonts = {
  Monument: 'PP Monument Extended',
  DMSerif: 'DM Serif Text',
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: Fonts.DMSerif,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  bodyTextItalic: {
    fontFamily: Fonts.DMSerif,
    fontSize: 16,
    color: Colors.textPrimary,
    fontStyle: 'italic',
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
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
