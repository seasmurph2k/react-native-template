import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Store, persistor} from './Store';
import AppContainer from './src/AppContainer';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <StoreProvider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
