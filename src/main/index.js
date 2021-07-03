import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import {View,Text} from 'react-native'
import Home from '../auth/screens/home';
import About from '../auth/screens/about'
import Menu from '../auth/screens/menu';
import Photos from '../auth/screens/photos';
import Spotlight from '../auth/screens/artists';
import Event from '../auth/screens/event';
import Events from '../auth/screens/events';
const Drawer = createDrawerNavigator();

const Main = ()=>{
return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home"  component={Home}     />
        
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

export default Main;