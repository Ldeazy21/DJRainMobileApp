import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider } from '../../src/auth/Context/AuthContext';
import Onboarding from "./screens/onboarding";
import SignIn from "./screens/signIn";
import CreateAccount from "./screens/createAccount";


import PasswordReset from "./screens/passwordReset";
import Verify from "./screens/verify";
import Home from "./screens/home";


const AuthStack = createStackNavigator();


export default function AuthStackComponent({ navigation }) {

  return (
    <AuthContextProvider navigation={navigation}>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
        <AuthStack.Screen name="ResetPassword" component={PasswordReset} />
        <AuthStack.Screen name="Verify" component={Verify} />
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </AuthContextProvider>
  );
}
