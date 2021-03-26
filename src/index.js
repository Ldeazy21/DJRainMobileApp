import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './setup/redux/store';

import App from './app';

export default App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <App/>
      </Provider>
    </NavigationContainer>
  )
}