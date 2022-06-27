import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Store, persistor} from './Store';
import AppContainer from './src/AppContainer';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <StoreProvider store={Store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
