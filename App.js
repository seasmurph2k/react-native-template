import React, {useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import HomeNav from './src/nav/HomeNav';
import {CombinedDefaultTheme} from './src/utils/Theme';
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(CombinedDefaultTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <HomeNav />
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

export default App;
