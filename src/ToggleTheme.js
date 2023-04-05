import React from 'react';
import {ThemeContext} from '../App';
import {Switch, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export default function ToggleTheme() {
  const {setTheme, theme} = React.useContext(ThemeContext);
  const isDarkTheme = theme === MD3DarkTheme ? true : false;
  return (
    <Switch
      value={isDarkTheme}
      onValueChange={() =>
        theme === MD3LightTheme
          ? setTheme(MD3DarkTheme)
          : setTheme(MD3LightTheme)
      }
    />
  );
}
