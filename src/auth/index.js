import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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

const AuthStack = createStackNavigator();

export default function AuthStackComponent() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Spotlight" component={Spotlight} />
      <AuthStack.Screen name="Photos" component={Photos} />
      <AuthStack.Screen name="Event" component={Event} />
      <AuthStack.Screen name="Events" component={Events} />
      <AuthStack.Screen name="Home" component={Home} />
      {/* <AuthStack.Screen name="Main" component={Main} /> */}
      <AuthStack.Screen name="Player" component={Player} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="SignIn" component={SignIn} />

      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="ArtistsSpotlight" component={ArtistsSpotlight} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="About" component={About} />
      <AuthStack.Screen name="Menu" component={Menu} />
    </AuthStack.Navigator>
  );
}
