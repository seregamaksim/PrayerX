import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import StackApp from './StackApp';
import { persistor, store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
