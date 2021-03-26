import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './screens/onboarding';
import SignIn from './screens/signIn';
import CreateAccount from './screens/createAccount';

const AuthStack = createStackNavigator();

export default function AuthStackComponent() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>
  );
}