import React,{useState,useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Auth from '../../auth';
import Main from '../../main';
import { AuthContext } from '../../auth/Context/AuthContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

 function MainStack() {
   const {isLoggedIn} =  useContext(AuthContext)
  

  return (
    <>
    {!isLoggedIn ?

    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
    :
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />

    </Drawer.Navigator>
    
    

    }
    
    
    </>
  );
}
export default MainStack