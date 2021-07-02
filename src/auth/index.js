import React,{useState,useEffect} from "react";
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
import Songs from "./screens/songs";

import ArtistsSpotlight from "./screens/artistspotlight";
import PasswordReset from "./screens/passwordReset";
import Verify from "./screens/verify";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from "../../Firebase";


// const AuthStack = createDrawerNavigator();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AuthStackComponent({ navigation}) {
  const [loggedIn,setLoggedIn] = useState(false);

useEffect(()=>{
  auth.onAuthStateChanged(authState=>{
    if(authState){
      setLoggedIn(true)
    }
  })
},[])
 
  return (
      <AuthContextProvider navigation={navigation}>
      {loggedIn ?
    <AuthStack.Navigator>
      (
        <>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="ResetPassword" component={PasswordReset} />
      <AuthStack.Screen name="Verify" component={Verify} />
        </>
      )
    </AuthStack.Navigator>
      :
      (
        <Drawer.Navigator 
        drawerContent={(props)=><Menu {...props} />}
        >
        
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        {/* <Drawer.Screen name="Player" component={Player} options={{headerShown:false}} /> */}
        {/* <Drawer.Screen name="Songs" component={Songs} /> */}
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Photos" component={Photos} />
        <Drawer.Screen name="Spotlight" component={Spotlight} />
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Event" component={Event} />
        </Drawer.Navigator>
      )

      }
  
      </AuthContextProvider>
  );
}
  {/* <AuthStack.Screen name="Main" component={Main} /> */}
  {/* <AuthStack.Screen name="ArtistsSpotlight" component={ArtistsSpotlight} /> */}

  {/* <AuthStack.Screen name="SignIn" component={SignIn} /> */}
  {/* <AuthStack.Screen name="Onboarding" component={Onboarding} /> */}
