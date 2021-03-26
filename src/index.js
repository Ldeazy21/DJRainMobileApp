import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import store from './setup/redux/store';

import App from './app';

export default Container = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <App/>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  )
}