import React from 'react';
import {ThemeContext} from '../../App';
import {Switch} from 'react-native-paper';
import {CombinedDarkTheme, CombinedDefaultTheme} from './Theme';

export default function ToggleTheme() {
  const {setTheme, theme} = React.useContext(ThemeContext);
  const isDarkTheme = theme === CombinedDarkTheme ? true : false;
  return (
    <Switch
      value={isDarkTheme}
      onValueChange={() =>
        theme === CombinedDefaultTheme
          ? setTheme(CombinedDarkTheme)
          : setTheme(CombinedDefaultTheme)
      }
    />
  );
}
