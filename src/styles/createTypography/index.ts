import { TextStyle, FontVariant } from 'react-native';

export interface Typography {
  headingTitle: TextStyle;
  title: TextStyle;
  label: TextStyle;
  labelBold: TextStyle;
  link: TextStyle;
  paragraph: TextStyle;
  paragraphBold: TextStyle;
  paragraphMini: TextStyle;
  paragraphMiniBold: TextStyle;
}

export default function createTypography(isDarkMode: boolean): Typography {
  const defaultStyles = {
    color: isDarkMode ? '#fff' : '#000',
    fontVariant: ['tabular-nums'] as FontVariant[],
  };

  return {
    headingTitle: {
      ...defaultStyles,
      fontWeight: 'bold',
      fontSize: 26,
      lineHeight: 28,
    },
    title: {
      ...defaultStyles,
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 26,
    },
    labelBold: {
      ...defaultStyles,
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 22,
    },
    label: {
      ...defaultStyles,
      fontSize: 18,
      lineHeight: 22,
    },
    link: {
      ...defaultStyles,

      fontSize: 16,
      lineHeight: 20,
    },
    paragraph: {
      ...defaultStyles,
      fontSize: 16,
      lineHeight: 20,
    },
    paragraphBold: {
      ...defaultStyles,
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 20,
    },
    paragraphMini: {
      ...defaultStyles,
      fontSize: 14,
      lineHeight: 18,
    },
    paragraphMiniBold: {
      ...defaultStyles,
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 18,
    },
  };
}
