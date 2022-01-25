export interface Palette {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  divider: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    canvas: string;
    default: string;
  };
}

export default function usePalette(isDarkMode: boolean) {
  return {
    primary: '#38B5e6',
    secondary: '#E13CB0',
    black: '#000',
    white: '#fff',
    error: {
      main: '#9A002B',
      contrastText: '#fff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    text: {
      primary: '#4A4A4A',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: '#767676',
    },
    background: {
      canvas: '#fff',
      default: '#303030',
    },
    ...(isDarkMode && {
      divider: 'rgba(255, 255, 255, 0.12)',
      text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
      },
      background: {
        canvas: '#000',
        default: '#303030',
      },
    }),
  };
}
