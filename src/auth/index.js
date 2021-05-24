import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {AuthContextProvider} from '../../src/auth/Context/AuthContext';
import Onboarding from "./screens/onboarding";
import SignIn from "./screens/signIn";
import CreateAccount from "./screens/createAccount";
import Menu from "./screens/menu";
import About from "./screens/about";
import Player from "./screens/player";
import Home from "./screens/home";
import Events from "./screens/events";
import Main from "./screens/main";
import Event from "./screens/event";
import Photos from "./screens/photos";
import Spotlight from "./screens/artists";

import ArtistsSpotlight from "./screens/artistspotlight";
import PasswordReset from "./screens/passwordReset";
import Verify from "./screens/verify";

const AuthStack = createStackNavigator();

export default function AuthStackComponent({ navigation}) {
  return (
      <AuthContextProvider navigation={navigation}>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Mix Player" component={Player} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Verify" component={Verify} />
      <AuthStack.Screen name="ResetPassword" component={PasswordReset} />
      <AuthStack.Screen name="Photos" component={Photos} />
      <AuthStack.Screen name="Spotlight" component={Spotlight} />
      <AuthStack.Screen name="Event" component={Event} />
      <AuthStack.Screen name="Events" component={Events} />
      <AuthStack.Screen name="Home" component={Home} />
      {/* <AuthStack.Screen name="Main" component={Main} /> */}
      {/* <AuthStack.Screen name="ArtistsSpotlight" component={ArtistsSpotlight} /> */}

      {/* <AuthStack.Screen name="SignIn" component={SignIn} /> */}
      {/* <AuthStack.Screen name="Onboarding" component={Onboarding} /> */}
      <AuthStack.Screen name="About" component={About} />
      <AuthStack.Screen name="Menu" component={Menu} />
    </AuthStack.Navigator>
      </AuthContextProvider>
  );
}
