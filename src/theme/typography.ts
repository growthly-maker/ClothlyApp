// Typographie pour l'application Clothly

import {Platform, TextStyle} from 'react-native';

// Famille de polices
export const FONTS = {
  // Pour iOS et Android
  regular: Platform.select({
    ios: 'Poppins-Regular',
    android: 'Poppins-Regular',
  }),
  medium: Platform.select({
    ios: 'Poppins-Medium',
    android: 'Poppins-Medium',
  }),
  semiBold: Platform.select({
    ios: 'Poppins-SemiBold',
    android: 'Poppins-SemiBold',
  }),
  bold: Platform.select({
    ios: 'Poppins-Bold',
    android: 'Poppins-Bold',
  }),
  // Utiliser des polices système en attendant l'ajout des polices personnalisées
  default: Platform.select({
    ios: 'System',
    android: 'Roboto',
  }),
};

// Styles de texte
export const TYPOGRAPHY: Record<string, TextStyle> = {
  // Titres
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    fontFamily: FONTS.default,
  },
  h2: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    fontFamily: FONTS.default,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    fontFamily: FONTS.default,
  },
  h4: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: FONTS.default,
  },
  h5: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    fontFamily: FONTS.default,
  },
  h6: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: FONTS.default,
  },

  // Corps de texte
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: FONTS.default,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: FONTS.default,
  },
  body3: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: FONTS.default,
  },

  // Éléments spécifiques
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: FONTS.default,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: FONTS.default,
  },
  overline: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    fontFamily: FONTS.default,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
};

export default TYPOGRAPHY;
