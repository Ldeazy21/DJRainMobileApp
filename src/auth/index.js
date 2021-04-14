import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/onboarding';
import SignIn from './screens/signIn';
import CreateAccount from './screens/createAccount';
import Menu from './screens/menu';
import About from './screens/about';
import ArtistsSpotlight from './screens/artistspotlight';

const AuthStack = createStackNavigator();

export default function AuthStackComponent() {
  return (
    <AuthStack.Navigator >
      <AuthStack.Screen name="ArtistsSpotlight" component={ArtistsSpotlight} />
      <AuthStack.Screen name="Onboarding" component={Onboarding}/>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="About" component={About} />
      <AuthStack.Screen name="Menu" component={Menu} />
    </AuthStack.Navigator>
  );
}

