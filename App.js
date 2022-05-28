import React from 'react';
import {useColorScheme} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import AppContainer from './src/AppContainer';

const App = () => {
  return (
    <PaperProvider>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
