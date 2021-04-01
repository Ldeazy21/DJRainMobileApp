import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import store from './setup/redux/store';
import App from './app';

const theme = {
   ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003E95',
    background: '#001B40',
    accent: '#f1c40f',
  },
};

export default Container = () => {
  return (
    <Provider store={store} theme={theme}>
      <NavigationContainer>
        <PaperProvider>
          <App/>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  )
}