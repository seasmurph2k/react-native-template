import {DefaultTheme, DarkTheme, configureFonts} from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

export const lTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, primary: '#1ba1f2'},
  fonts: configureFonts(fontConfig),
};

export const dTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#1ba1f2',
    mode: 'exact',
  },
  fonts: configureFonts(fontConfig),
};
